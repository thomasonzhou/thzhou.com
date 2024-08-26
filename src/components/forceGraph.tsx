"use client";
import { skillData, node, link } from "@/data/nodes";
import { ForceGraph3D } from "react-force-graph";
import SplitColorNode from "./splitColorNode";
import MonocolorNode from "./monocolorNode";

const forceGraph = ({}) => {
    const TEXTHEIGHT = 8;
    return (
        <ForceGraph3D
            graphData={skillData}
            nodeAutoColorBy="group"
            nodeLabel={"description"}
            nodeThreeObject={(node: node) => {
                if (node.colors.length === 2 && node.splitIndex) {
                    return SplitColorNode(
                        node,
                        node.splitIndex,
                        node.colors,
                        TEXTHEIGHT
                    );
                }
                return MonocolorNode(node, TEXTHEIGHT);
            }}
            onNodeClick={(node: node) => {
                if (node.url !== undefined) {
                    if (node.newTab === false) {
                        window.open(node.url, "_self");
                    } else {
                        window.open(node.url, "_blank");
                    }
                }
            }}
            linkLabel={"description"}
            linkOpacity={0.5}
        />
    );
};

export default forceGraph;
