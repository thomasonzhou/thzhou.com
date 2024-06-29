"use client";
import dynamic from "next/dynamic";
import React from "react";
import Loading from "@/components/loading";

const DynamicSkillGraph = dynamic(() => import("../components/skillGraph"), {
    ssr: false,
    loading: () => <Loading />,
});

export default function Home() {
    return (
        <main className="bg-black">
            <DynamicSkillGraph />
        </main>
    );
}
