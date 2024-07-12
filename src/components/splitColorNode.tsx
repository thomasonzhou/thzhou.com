/* modification of three-spritetext, adds 2 color split
there are some "useless" values that were left to resemble the original code
e.g. border and stroke width of 0
*/

import { SpriteMaterial, Sprite, CanvasTexture } from "three";
import { skillNode } from "@/data/skillNodes";

const SplitColorNode = (
    node: skillNode,
    splitIndex: number,
    color1: string,
    color2: string,
    textHeight: number
) => {
    const text = node.nodeVal;
    if (splitIndex >= text.length) return null;

    const borderWidth = 0;
    const borderColor = "white";
    const strokeWidth = 0;
    const strokeColor = "white";
    const fontFace = "system-ui";
    const fontSize = 90;
    const fontWeight = "normal";
    const canvas = document.createElement("canvas");

    const fontSizeScale = (prop: number) => prop * fontSize * 0.1;

    const border = [borderWidth, borderWidth];
    const relBorder = border.map(fontSizeScale);

    const borderRadius = [0, 0];
    const relBorderRadius = borderRadius.map(fontSizeScale);

    const padding = [0, 0];
    const relPadding = padding.map(fontSizeScale);

    const ctx = canvas.getContext("2d");
    if (ctx == null) return null;

    const font = `${fontWeight} ${fontSize}px ${fontFace}`;
    ctx.font = font;

    const text1 = text.slice(0, splitIndex);
    const text2 = text.slice(splitIndex);

    // each canvas is a 2D plane, we want to give it the minimum area
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
