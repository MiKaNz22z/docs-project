"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullscreenLoader } from "@/components/fullscreen-loader";
import { getUsers, getDocuments } from "./actions";
import { toast } from "sonner";
import { Id } from "../../../../convex/_generated/dataModel";
import { RIGHT_MARGIN_DEFAULT, LEFT_MARGIN_DEFAULT} from "@/constants/margins";


type User = { id: string; name: string; avatar: string};

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();

    const [ users, setUsers ] = useState<User[]>([]);

    const fetchUsers = useMemo(
        () => async () => {
            try {
                const list = await getUsers();
                setUsers(list);
            } catch {
                toast.error("Failed to fetch users")
            }
        }, 
        [],
    )

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    return (
        <LiveblocksProvider 
            throttle={16}
            authEndpoint={async () => {
               const endPoint = "/api/liveblocks-auth"
               const room = params.documentId as string;

               const response = await fetch(endPoint, {
                method: "POST",
                body: JSON.stringify({ room })
               })

               return await response.json()
            }}
            resolveUsers={({ userIds }) => {
                return userIds.map(
                    (userId) => {
                        const user = users.find((user) => user.id === userId);
                        if (!user) return undefined;
                        return {
                            name: user.name,
                            avatar: user.avatar,
                            color: `hsl(${Math.random() * 360}, 70%, 50%)` // Generate random color
                        };
                    }
                )
            }}
            resolveMentionSuggestions={({ text }) => {
                let filteredUsers = users;

                if(text) {
                    filteredUsers = users.filter((user) => 
                        user.name.toLowerCase().includes(text.toLowerCase())
                    )
                }

                return filteredUsers.map((user) => user.id)
            }}
            resolveRoomsInfo={async ({ roomIds }) => {
                const documents = await getDocuments(roomIds as Id<"documents">[])
                return documents.map((document) => ({
                    id: document.id,
                    name: document.name,
                }))
            }}
        >
        <RoomProvider id={params.documentId as string} initialStorage={{ leftMargin: LEFT_MARGIN_DEFAULT, rightMargin: RIGHT_MARGIN_DEFAULT }}>
            <ClientSideSuspense fallback={<FullscreenLoader label="Room Loading..."/>}>
            {children}
            </ClientSideSuspense>
        </RoomProvider>
        </LiveblocksProvider>
    );
}