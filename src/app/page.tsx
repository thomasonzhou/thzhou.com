"use client";
import dynamic from "next/dynamic";
import React from "react";

const DynamicSkillGraph = dynamic(() => import("../components/skillGraph"), {
    ssr: false,
    loading: () => <p>Please wait a few seconds</p>,
});

export default function Home() {
    return (
        <main>
            <DynamicSkillGraph />
        </main>
    );
}
