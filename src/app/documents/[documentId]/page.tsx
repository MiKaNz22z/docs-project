import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs"

import { Id } from "../../../../convex/_generated/dataModel";
import Document from "./document";
import { api } from "../../../../convex/_generated/api";

interface DocumentIdPageProps  {
    params: Promise<{ documentId: Id<"documents"> }>
}

const DocumenIdPage = async ({ params } : DocumentIdPageProps) => {
    const { documentId } = await params;
    const { getToken } = await auth();
    const token = await getToken({ template: "convex" }) ?? undefined;

    if (!token) {
        throw new Error("Unauthorized")
    }

    const preloadedDoucment = await preloadQuery(
        api.documents.getById,
        { id: documentId },
        { token }
    )
    
    return <Document preloadedDoucment={preloadedDoucment} />
}
 
export default DocumenIdPage;