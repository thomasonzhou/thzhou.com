import { node } from "@/data/nodes";
import SpriteText from "three-spritetext";

const MonocolorNode = (node: node, textheight: number) => {
    const sprite = new SpriteText(node.nodeVal);

    if (node.colors.length > 0) {
        sprite.color = node.colors[0];
    }
    sprite.textHeight = textheight;
    return sprite;
};
export default MonocolorNode;
