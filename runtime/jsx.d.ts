declare namespace JSX {

    interface ElementChildren {
        children: Record<PropertyKey, never>;
    }

    interface Element {
        readonly _brand: "JSX.MessageEntity";
        toString(): string;
    }

    type PrerenderNodeProps = { 
        children?: string | PrerenderNode | (string | PrerenderNode)[] 
        // deno-lint-ignore no-explicit-any
        [key: string]: any
    }

    type PrerenderNode = {
        type: keyof IntrinsicElements;
        props: PrerenderNodeProps
    } | string


    type Primitive = string | boolean | number | null | undefined;
    type Child = Primitive | Element;
    type Children = Child | Child[];
    type PrimitiveChild = Primitive | Primitive[];
    type WithChildren<T extends Children = Children> = {
        [key in keyof ElementChildren]: T;
    };
    type WithoutChildren = Record<never, never>;

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