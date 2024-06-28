"use client";
import { skillNodes, skillNode } from "@/data/skillNodes";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";

const SkillGraph = ({}) => {
    return (
        <ForceGraph3D
            graphData={skillNodes}
            nodeAutoColorBy="group"
            nodeThreeObject={(node: skillNode) => {
                const sprite = new SpriteText(node.nodeVal);
                sprite.color = node.color;
                sprite.textHeight = 8;
                return sprite;
            }}
            linkOpacity={0.5}
        />
    );
};
export default SkillGraph;
