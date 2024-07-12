"use client";
import { skillData, skillNode, skillLink } from "@/data/skillNodes";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";
import SplitColorNode from "./splitColorNode";

const SkillGraph = ({}) => {
    return (
        <ForceGraph3D
            graphData={skillData}
            nodeAutoColorBy="group"
            nodeThreeObject={(node: skillNode) => {
                const TEXTHEIGHT = 8;
                if (node.nodeVal == "Python") {
                    return SplitColorNode(
                        node,
                        2,
                        "#4584b6",
                        "#ffde57",
                        TEXTHEIGHT
                    ); //https://www.python.org/community/logos/
                }
                const sprite = new SpriteText(node.nodeVal);
                sprite.color = node.color;
                sprite.textHeight = TEXTHEIGHT;
                return sprite;
            }}
            linkOpacity={0.5}
        />
    );
};

export default SkillGraph;
