export type node = {
    id: number;
    nodeVal: string;
    splitIndex?: number; // define with two colors
    colors: string[];
    url: string;
};

export type link = {
    source: number;
    target: number;
    connection?: string;
};

export const skillData: {
    nodes: node[];
    links: link[];
} = {
    nodes: [
        {
            id: 0,
            nodeVal: "C",
            colors: ["#232ca1"],
            url: "https://github.com/thomasonzhou/dino-run-nds",
        },
        {
            id: 1,
            nodeVal: "C++",
            colors: ["#5E97D0"],
            url: "https://www.learncpp.com/",
        },
        {
            id: 2,
            nodeVal: "Docker",
            colors: ["#1D63ED"], //https://www.docker.com/company/newsroom/media-resources/
            url: "https://devopswithdocker.com/",
        },
        {
            id: 3,
            nodeVal: "Go",
            colors: ["#00ADD8"], //https://go.dev/blog/go-brand -> Brand Book
            url: "https://github.com/thomasonzhou/go-tdd",
        },
        {
            id: 4,
            nodeVal: "PostgreSQL",
            colors: ["#336791"], //https://wiki.postgresql.org/wiki/Color_Palette
            url: "https://www.postgresql.org/docs/current/tutorial.html",
        },
        {
            id: 5,
            nodeVal: "Python",
            colors: ["#4584b6", "#ffde57"], //https://www.python.org/community/logos/
            splitIndex: 2,
            url: "https://docs.python.org/3/tutorial/index.html",
        },
        {
            id: 6,
            nodeVal: "TypeScript",
            colors: ["#3178c6"], //https://www.typescriptlang.org/branding/
            url: "https://github.com/thomasonzhou/thzhou.com",
        },
        {
            id: 7,
            nodeVal: "Linkedin",
            colors: ["#0a66c2"], //https://brand.linkedin.com/downloads
            url: "https://www.linkedin.com/in/thomasonzhou/",
        },
        {
            id: 8,
            nodeVal: "GitHub",
            colors: ["#FFFFFF"], //https://github.com/logos
            url: "https://github.com/thomasonzhou/",
        },
    ],
    links: [
        { source: 2, target: 3 },
        { source: 2, target: 5 },
        { source: 2, target: 6 },
        { source: 2, target: 4 },
        { source: 5, target: 4 },
        { source: 5, target: 1 },
        { source: 1, target: 0 },
        { source: 7, target: 8 },
    ],
};
