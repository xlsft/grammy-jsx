import type { FormattedString } from "npm:@grammyjs/parse-mode@latest";
import { jsxr } from "./jsx.render.ts";
import type { JSX } from "./jsx.d.ts"

export function jsx(type: keyof JSX.IntrinsicElements, props: Record<string, never>): FormattedString | JSX.PrerenderNode {
    if (type !== 'JSX.Message') return { type, props }
    const tree = props.children as JSX.PrerenderNode[]
    return jsxr(tree)
}

export const jsxs = jsx;
export const Fragment = 'JSX.Message'