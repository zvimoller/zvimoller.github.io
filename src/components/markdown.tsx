import React from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import MermaidDiagram from "./mermaid-diagram";
import { useIsDarkMode } from "./use-is-dark-mode";

function withClass<P extends { className?: string }>(props: P, cls: string): P {
  return { ...props, className: [cls, props.className].filter(Boolean).join(" ") };
}

function normalizeLang(lang: string | undefined): string | undefined {
  if (!lang) return undefined;
  const l = lang.toLowerCase();
  if (l === "yml") return "yaml";
  if (l === "sh" || l === "shell") return "bash";
  if (l === "js") return "javascript";
  if (l === "ts") return "typescript";
  return l;
}

export function Markdown({ markdown, className }: { markdown: string; className?: string }) {
  const isDark = useIsDarkMode();

  const components: Components = {
    h1: (props) => React.createElement("h1", withClass(props, "mt-10 text-3xl font-semibold tracking-tight")),
    h2: (props) =>
      React.createElement(
        "h2",
        withClass(props, "mt-10 border-b border-zinc-200 pb-2 text-2xl font-semibold tracking-tight dark:border-zinc-800")
      ),
    h3: (props) => React.createElement("h3", withClass(props, "mt-8 text-xl font-semibold tracking-tight")),
    h4: (props) => React.createElement("h4", withClass(props, "mt-6 text-lg font-semibold tracking-tight")),
    p: (props) => React.createElement("p", withClass(props, "leading-7")),
    ul: (props) => React.createElement("ul", withClass(props, "my-4 ml-6 list-disc")),
    ol: (props) => React.createElement("ol", withClass(props, "my-4 ml-6 list-decimal")),
    li: (props) => React.createElement("li", withClass(props, "mt-2")),

    a: (props) =>
      React.createElement(
        "a",
        {
          ...props,
          className: ["text-cyan-700 hover:underline underline-offset-4 dark:text-cyan-300", (props as any).className]
            .filter(Boolean)
            .join(" "),
          target: (props as any).target ?? "_blank",
          rel: (props as any).rel ?? "noreferrer noopener",
        },
        props.children
      ),

    // Quote visible en light/dark (tu problema original)
    blockquote: (props) =>
      React.createElement(
        "blockquote",
        withClass(
          props,
          "my-6 rounded-lg border-l-4 border-zinc-300 bg-zinc-50 px-6 py-4 italic text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-200/80"
        )
      ),

    hr: (props) => React.createElement("hr", withClass(props, "my-10 border-zinc-200 dark:border-zinc-800")),

    table: (props) =>
      React.createElement(
        "div",
        { className: "my-8 w-full overflow-x-auto" },
        React.createElement("table", withClass(props, "w-full border-collapse"))
      ),
    th: (props) =>
      React.createElement(
        "th",
        withClass(
          props,
          "border border-zinc-200 bg-zinc-50 px-3 py-2 text-left text-sm font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
        )
      ),
    td: (props) =>
      React.createElement("td", withClass(props, "border border-zinc-200 px-3 py-2 align-top dark:border-zinc-800")),

    pre: ({ children }) => React.createElement(React.Fragment, null, children),

    code: (props) => {
      const inline: boolean = !!(props as any).inline;
      const classNameProp = (props as any).className ?? "";
      const match = /language-(\S+)/.exec(classNameProp);
      const lang = normalizeLang(match?.[1]);

      if (inline) {
        return React.createElement(
          "code",
          withClass(
            props as any,
            "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[0.85em] text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
          )
        );
      }

      const raw = String((props as any).children ?? "").replace(/\n$/, "");

      // Mermaid
      if (lang === "mermaid") {
        return React.createElement(MermaidDiagram, { chart: raw });
      }

      // Código/YAML/etc
      return React.createElement(
        "div",
        {
          className:
            "my-6 overflow-x-auto rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-slate-950",
        },
        React.createElement(
          SyntaxHighlighter as any,
          {
            language: lang,
            style: isDark ? (oneDark as any) : (oneLight as any),
            customStyle: { margin: 0, background: "transparent", padding: "1rem" },
            codeTagProps: { style: { fontFamily: "var(--font-mono)" } },
          },
          raw
        )
      );
    },
  };

  return React.createElement(
    "article",
    { className: ["markdown max-w-none", className].filter(Boolean).join(" ") },
    React.createElement(
      ReactMarkdown,
      { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeRaw], components },
      markdown
    )
  );
}
