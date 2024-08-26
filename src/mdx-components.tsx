import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-2xl mx-4 my-6">{children}</h1>
        ),
        h2: ({ children }) => <h2 className="text-xl m-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg m-4">{children}</h3>,
        p: ({ children }) => <p className="m-4">{children}</p>,
        ...components,
    };
}
