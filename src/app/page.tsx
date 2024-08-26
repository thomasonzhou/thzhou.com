"use client";
import dynamic from "next/dynamic";
import React from "react";
import Loading from "@/components/loading";

const DynamicForceGraph = dynamic(() => import("../components/forceGraph"), {
    ssr: false,
    loading: () => <Loading />,
});

export default function Home() {
    return (
        <main className="bg-black">
            <DynamicForceGraph />
        </main>
    );
}
