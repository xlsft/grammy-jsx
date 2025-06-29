/**
 * Grammy JSX types
 */

declare namespace JSX {
    /**
     * Interface defining the structure for element children
     * @interface
     */
    interface ElementChildren {
        children: Record<PropertyKey, never>;
    }

    /**
     * Interface representing a JSX Element
     * @interface
     */
    interface Element {
        readonly _brand: "JSX.MessageEntity";
        toString(): string;
    }

    /**
     * Type defining the properties of a pre-render node
     * @typedef {Object} PrerenderNodeProps
     */
    type PrerenderNodeProps = { 
        children?: string | PrerenderNode | (string | PrerenderNode)[] 
        // deno-lint-ignore no-explicit-any
        [key: string]: any
    }

    /**
     * Type representing a pre-render node structure
     * @typedef {Object|string} PrerenderNode
     */
    type PrerenderNode = {
        type: keyof IntrinsicElements;
        props: PrerenderNodeProps
    } | string

    /**
     * Type representing primitive values in JSX
     * @typedef {string|boolean|number|null|undefined} Primitive
     */
    type Primitive = string | boolean | number | null | undefined;

    /**
     * Type representing a child element which can be either primitive or Element
     * @typedef {Primitive|Element} Child
     */
    type Child = Primitive | Element;

    /**
     * Type representing children elements which can be a single Child or array of Child
     * @typedef {Child|Child[]} Children
     */
    type Children = Child | Child[];

    /**
     * Type representing primitive children which can be a single Primitive or array of Primitive
     * @typedef {Primitive|Primitive[]} PrimitiveChild
     */
    type PrimitiveChild = Primitive | Primitive[];

    /**
     * Generic type for elements that can have children
     * @template {Children} T
     * @typedef {Object} WithChildren
     */
    type WithChildren<T extends Children = Children> = {
        [key in keyof ElementChildren]: T;
    };

    /**
     * Type representing elements without children
     * @typedef {Record<never, never>} WithoutChildren
     */
    type WithoutChildren = Record<never, never>;

    /**
     * Interface defining all intrinsic (built-in) JSX elements
     * @interface
     */
    interface IntrinsicElements {
        'JSX.Message': WithChildren
        p: WithChildren
        b: WithChildren
        i: WithChildren
        u: WithChildren
        s: WithChildren
        a: { href: string } & WithChildren
        code: WithChildren<PrimitiveChild>
        pre: { lang?: string } & WithChildren
        blockquote: WithChildren & { expandable?: boolean }
        spoiler: WithChildren
        message: { chat: number, message: number } & WithChildren
        mention: { id: number } & WithChildren
        emoji: { id: bigint | string } & WithChildren<string>
    }
}