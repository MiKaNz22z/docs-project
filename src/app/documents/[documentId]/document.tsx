"use client"

import { Preloaded, usePreloadedQuery } from "convex/react";
import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import Toolbar from "./toolbar";
import { api } from "../../../../convex/_generated/api";

interface DocumentProps  {
    preloadedDoucment: Preloaded<typeof api.documents.getById>
}

const Document = ({ preloadedDoucment } : DocumentProps) => {
    const document = usePreloadedQuery(preloadedDoucment);

    return ( 
        <Room>
            <div className="min-h-screen bg-[#FAFBFD]">
                <div className="flex flex-col w-full px-4 pt-2 gap-y-2 fixed top-0 left-0 ring-0 z-10 bg-[#FAFBFD] print:hidden">
                    <Navbar data={document} />
                    <Toolbar />
                </div>
                <div className="pt-[114px] print:pt-0">
                    <Editor initialContent={document?.initialContent}/>
                </div>
            </div>
        </Room>
    );
}
 
export default Document;