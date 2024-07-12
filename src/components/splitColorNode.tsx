// modification of three-spritetext, adds 2 color split
// fallback to monocolor
import { SpriteMaterial, Sprite, CanvasTexture } from "three";
import { node } from "@/data/skillNodes";
import MonocolorNode from "@/components/monocolorNode";

const SplitColorNode = (
    node: node,
    splitIndex: number,
    colors: string[],
    textHeight: number
) => {
    const text = node.nodeVal;
    const [color1, color2] = colors;
    if (splitIndex >= text.length) return MonocolorNode(node, textHeight);

    const fontFace = "system-ui";
    const fontSize = 90;
    const fontWeight = "normal";
    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");
    if (ctx == null) return MonocolorNode(node, textHeight);

    const font = `${fontWeight} ${fontSize}px ${fontFace}`;
    ctx.font = font;

    const text1 = text.slice(0, splitIndex);
    const text2 = text.slice(splitIndex);

    // each canvas is a 2D plane, we want to give it the minimum area
    // the canvas clips the edges between nodes, not the node text
    const text1Width = ctx.measureText(text1).width;
    const text2Width = ctx.measureText(text2).width;
    const innerWidth = text1Width + text2Width;
    const innerHeight = fontSize * 1;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.font = font;

    ctx.fillStyle = color1;
    ctx.fillText(text1, innerWidth / 2 - text2Width / 2, fontSize);
    ctx.fillStyle = color2;
    ctx.fillText(text2, innerWidth / 2 + text1Width / 2, fontSize);

    const texture = new CanvasTexture(canvas);
    const spriteMaterial = new SpriteMaterial({ map: texture });
    const sprite = new Sprite(spriteMaterial);

    const yScale = textHeight;
    sprite.scale.set((yScale * canvas.width) / canvas.height, yScale, 0);
    return sprite;
};
export default SplitColorNode;
