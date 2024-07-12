"use client";
import { skillData, node, link } from "@/data/skillNodes";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";
import SplitColorNode from "./splitColorNode";
import MonocolorNode from "./monocolorNode";

const SkillGraph = ({}) => {
    const TEXTHEIGHT = 8;
    return (
        <ForceGraph3D
            graphData={skillData}
            nodeAutoColorBy="group"
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
                    window.open(node.url, "_blank");
                }
            }}
            linkOpacity={0.5}
        />
    );
};

export default SkillGraph;
