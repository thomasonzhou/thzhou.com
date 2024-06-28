export type skillNode = {
    id: number;
    nodeVal: string;
    color: string;
};
export const skillNodes = {
    nodes: [
        { id: 0, nodeVal: "Go" },
        { id: 1, nodeVal: "Docker" },
        { id: 2, nodeVal: "Python" },
        { id: 3, nodeVal: "Typescript" },
        { id: 4, nodeVal: "PostgreSQL" },
        { id: 5, nodeVal: "C++" },
        { id: 6, nodeVal: "C" },
    ],
    links: [
        {
            source: 1,
            target: 0,
        },
        {
            source: 1,
            target: 2,
        },
        {
            source: 1,
            target: 3,
        },
        {
            source: 1,
            target: 4,
        },
        {
            source: 2,
            target: 5,
        },
        {
            source: 5,
            target: 6,
        },
    ],
};
