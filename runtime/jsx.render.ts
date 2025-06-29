import { fmt, FormattedString, blockquote, bold, code, customEmoji, expandableBlockquote, italic, link, linkMessage, mentionUser, pre, spoiler, strikethrough, underline } from "npm:@grammyjs/parse-mode";

export const jsxr = (tree: JSX.PrerenderNode[]) => {

    const chunk = (
        type: keyof JSX.IntrinsicElements | 'text',
        content: string | FormattedString,
        props: JSX.PrerenderNodeProps = {}
    ): FormattedString => {
        if (typeof content === 'string') content = content.replaceAll("\\n", "\n");

        if (type === 'text') return fmt`${content}`;
        if (type === 'p') return fmt`\n${content}\n`;
        if (type === 'b') return fmt`${bold}${content}${bold}`;
        if (type === 'i') return fmt`${italic}${content}${italic}`;
        if (type === 'u') return fmt`${underline}${content}${underline}`;
        if (type === 's') return fmt`${strikethrough}${content}${strikethrough}`;
        if (type === 'a') return fmt`${link(props.href)}${content}${link(props.href)}`;
        if (type === 'code') return fmt`${code}${content}${code}`;
        if (type === 'pre') return fmt`${pre(props.lang)}${content}${pre(props.lang)}`;
        if (type === 'blockquote') return props.expandable ? fmt`${expandableBlockquote}${content}${expandableBlockquote}` : fmt`${blockquote}${content}${blockquote}`;
        if (type === 'spoiler') return fmt`${spoiler}${content}${spoiler}`;
        if (type === 'mention') return fmt`${mentionUser(content, props.id)}`
        if (type === 'message') return fmt`${linkMessage(content, props.chat, props.message)}`
        if (type === 'emoji') return fmt`${customEmoji(content, props.id)}`

        return fmt`${content}`;
    };

    const render = (node: string | JSX.PrerenderNode): FormattedString => {
        if (typeof node === "string") return chunk("text", node);
        const { type, props } = node;
        const children = Array.isArray(props.children)
            ? props.children
            : props.children !== undefined
                ? [props.children]
                : [];

        const rendered = children.map(render);
        const combined = rendered.reduce((acc, cur) => fmt`${acc}${cur}`, fmt``);
        return chunk(type as never, combined, props);
    }

    const result = tree.map(render).reduce((acc, cur) => fmt`${acc}${cur}`, fmt``);
    return result;
    
}