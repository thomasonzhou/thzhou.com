// https://pauldlug.com/g/mermaid-mdx-component
"use client";
import mermaid from "mermaid";
import React, { useEffect } from "react";

mermaid.initialize({
    startOnLoad: true,
    theme: "neutral",
});

type MermaidProps = {
    readonly chart: string;
};

const Mermaid = ({ chart }: MermaidProps): JSX.Element => {
    useEffect(() => mermaid.contentLoaded(), []);

    return <div className="mermaid">{chart}</div>;
};

export default Mermaid;
