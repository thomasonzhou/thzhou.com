import { skillNode } from "@/data/skillNodes";
import SpriteText from "three-spritetext";

const MonocolorNode = (node: skillNode, textheight: number) => {
    const sprite = new SpriteText(node.nodeVal);
    sprite.color = node.colors[0];
    sprite.textHeight = textheight;
    return sprite;
};
export default MonocolorNode;
