/**
 * Grammy JSX runtime
 */

import type { FormattedString } from "npm:@grammyjs/parse-mode@latest";
import { jsxr } from "./jsx.render.ts";
import type { JSX } from "./jsx.d.ts"

/**
 * Creates a JSX element or renders a message
 * @param type - The type of JSX element to create
 * @param props - The properties for the element
 * @returns Either a FormattedString for messages or a prerender node for other elements
 */
export function jsx(type: keyof JSX.IntrinsicElements, props: Record<string, never>): FormattedString | JSX.PrerenderNode {
    if (type !== 'JSX.Message') return { type, props }
    const tree = props.children as JSX.PrerenderNode[]
    return jsxr(tree)
}

/**
 * Alias for the jsx function to handle elements with multiple children
 */
export const jsxs = jsx;

/**
 * Fragment component used as a wrapper when multiple elements need to be returned
 */
export const Fragment = 'JSX.Message'