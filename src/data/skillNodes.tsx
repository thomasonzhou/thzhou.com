export type skillNode = {
    id: number;
    nodeVal: string;
    splitIndex?: number; // define with two colors
    colors: string[];
};

export type skillLink = {
    source: number;
    target: number;
    connection?: string;
};

export const skillData = {
    nodes: [
        { id: 0, nodeVal: "C", colors: ["#232ca1"] },
        { id: 1, nodeVal: "C++", colors: ["#5E97D0"] },
        { id: 2, nodeVal: "Docker", colors: ["#1D63ED"] }, //https://www.docker.com/company/newsroom/media-resources/
        { id: 3, nodeVal: "Go", colors: ["#00ADD8"] },
        { id: 4, nodeVal: "PostgreSQL", colors: ["#336791"] }, //https://wiki.postgresql.org/wiki/Color_Palette
        {
            id: 5,
            nodeVal: "Python",
            colors: ["#4584b6", "#ffde57"], //https://www.python.org/community/logos/
            splitIndex: 2,
        },
        { id: 6, nodeVal: "TypeScript", colors: ["#3178c6"] }, //https://www.typescriptlang.org/branding/
    ],
    links: [
        { source: 2, target: 3 },
        { source: 2, target: 5 },
        { source: 2, target: 6 },
        { source: 2, target: 4 },
        { source: 5, target: 4 },
        { source: 5, target: 1 },
        { source: 1, target: 0 },
    ],
};
