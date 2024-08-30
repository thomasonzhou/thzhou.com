export type node = {
    id: number;
    nodeVal: string;
    splitIndex?: number; // define with two colors
    colors: string[];
    url?: string;
    newTab?: boolean;
    description?: string;
};

export type link = {
    source: number;
    target: number;
    description?: string;
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
            description: "(github) NDS game for a microembedded systems course",
        },
        {
            id: 1,
            nodeVal: "C++",
            colors: ["#5E97D0"],
            url: "https://github.com/thomasonzhou/dino-run-nds",
            description: "(github) NDS game for a microembedded systems course",
        },
        {
            id: 2,
            nodeVal: "Docker",
            colors: ["#1D63ED"], //https://www.docker.com/company/newsroom/media-resources/
            url: "/docker_presentation.pdf",
            description:
                "(internship presentation) Docker - Why, what, and how",
        },
        {
            id: 3,
            nodeVal: "Go",
            colors: ["#00ADD8"], //https://go.dev/blog/go-brand -> Brand Book
            url: "https://github.com/thomasonzhou/go-tdd",
            description: "(github) Test-Driven Development",
        },
        {
            id: 4,
            nodeVal: "PostgreSQL",
            colors: ["#336791"], //https://wiki.postgresql.org/wiki/Color_Palette
            url: "/python_postgresql",
            newTab: false,
            description: "(internship diagram) Consolidating R&D data",
        },
        {
            id: 5,
            nodeVal: "Python",
            colors: ["#4584b6", "#ffde57"], //https://www.python.org/community/logos/
            splitIndex: 2,
            url: "/python_postgresql",
            newTab: false,
            description: "(internship diagram) Consolidating R&D data",
        },
        {
            id: 6,
            nodeVal: "TypeScript",
            colors: ["#3178c6"], //https://www.typescriptlang.org/branding/
            url: "https://github.com/thomasonzhou/thzhou.com",
            description: "(github) Source code for this website",
        },
        {
            id: 7,
            nodeVal: "Linkedin",
            colors: ["#0a66c2"], //https://brand.linkedin.com/downloads
            url: "https://www.linkedin.com/in/thomasonzhou/",
            description: "Previous internship experiences",
        },
        {
            id: 8,
            nodeVal: "GitHub",
            colors: ["#FFFFFF"], //https://github.com/logos
            url: "https://github.com/thomasonzhou/",
            description: "Public code",
        },
        {
            id: 9,
            nodeVal: "Learn more",
            colors: ["#CCCCCC"],
            url: "/learn_more",
            newTab: false,
            description: "Hover to learn more, click to open a link",
        },
        {
            id: 10,
            nodeVal: "Physics",
            colors: ["#777777"],
            url: "https://github.com/vasturiano/react-force-graph",
            description: "Made with react force graph",
        },
    ],
    links: [
        { source: 2, target: 3 },
        { source: 2, target: 5 },
        { source: 2, target: 6 },
        { source: 2, target: 4 },
        { source: 5, target: 4, description: "SQLAlchemy" },
        { source: 5, target: 1, description: "Extension modules" },
        { source: 1, target: 0 },
        { source: 7, target: 8 },
        { source: 9, target: 10 },
    ],
};
