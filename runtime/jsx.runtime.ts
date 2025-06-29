import { jsxr } from "./jsx.render.ts";


export function jsx(type: keyof JSX.IntrinsicElements, props: Record<string, never>) {
    if (type !== 'JSX.Message') return { type, props }
    const tree = props.children as JSX.PrerenderNode[]
    return jsxr(tree)
}

export const jsxs = jsx;
export const Fragment = 'JSX.Message'