export type skillNode = {
    id: number;
    nodeVal: string;
    color: string; //https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml
};

export type skillLink = {
    source: number;
    target: number;
    connection?: string;
};

export const skillData = {
    nodes: [
        { id: 0, nodeVal: "C", color: "#555555" },
        { id: 1, nodeVal: "C++", color: "#f34b7d" },
        { id: 2, nodeVal: "Docker", color: "#1D63ED" }, //https://www.docker.com/company/newsroom/media-resources/
        { id: 3, nodeVal: "Go", color: "#00ADD8" },
        { id: 4, nodeVal: "PostgreSQL", color: "#336791" }, //https://wiki.postgresql.org/wiki/Color_Palette
        { id: 5, nodeVal: "Python", color: "#3572A5" },
        { id: 6, nodeVal: "TypeScript", color: "#3178c6" },
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
