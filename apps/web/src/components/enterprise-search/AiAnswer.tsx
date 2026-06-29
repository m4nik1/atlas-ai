import { Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { useSearch } from "@/context/useSearch";
import type { SearchResult } from "@/lib/enterprise-search/data";
import { monoTileStyle } from "@/lib/enterprise-search/data";

interface AiAnswerProps {
  answer: string;
  citations: SearchResult[];
  accent: string;
}

export default function AiAnswer({ answer, citations, accent }: AiAnswerProps) {
  const { searchResults, isStreaming, metrics } = useSearch();
  const displayedAnswer =
    searchResults || (isStreaming ? "Thinking..." : answer);

  return (
    <div className="mb-[22px] border-b border-border px-0 pt-0.5 pb-[22px]">
      <div className="mb-3 flex items-center gap-[9px]">
        <span className="flex" style={{ color: accent }}>
          <Sparkles size={16} fill="currentColor" strokeWidth={0} />
        </span>
        <span className="text-[13px] font-semibold tracking-tight">
          AI Answer
        </span>
      </div>
      <div className="text-[14.5px] leading-[1.65] text-foreground/80 text-pretty">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="m-0 mb-3 last:mb-0">{children}</p>,
            strong: ({ children }) => (
              <strong className="font-semibold text-foreground/90">{children}</strong>
            ),
            em: ({ children }) => <em className="text-foreground/85">{children}</em>,
            a: ({ children, href }) => (
              <a
                className="font-medium underline decoration-foreground/25 underline-offset-3 hover:text-foreground"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => <ul className="my-3 list-disc space-y-1 pl-5">{children}</ul>,
            ol: ({ children }) => <ol className="my-3 list-decimal space-y-1 pl-5">{children}</ol>,
            li: ({ children }) => <li className="pl-1">{children}</li>,
            h1: ({ children }) => (
              <h1 className="mt-4 mb-2 text-[18px] font-semibold text-foreground first:mt-0">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-4 mb-2 text-[16px] font-semibold text-foreground first:mt-0">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-3 mb-1.5 text-[15px] font-semibold text-foreground first:mt-0">
                {children}
              </h3>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-3 border-l-2 border-border pl-3 text-muted-foreground">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isBlock = Boolean(className);

              return isBlock ? (
                <code className={`${className} block overflow-x-auto rounded-lg border border-border bg-muted px-3 py-2 text-[13px] leading-relaxed text-foreground`}>
                  {children}
                </code>
              ) : (
                <code className="rounded bg-muted px-1 py-0.5 text-[13px] text-foreground">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => <pre className="my-3 overflow-x-auto">{children}</pre>,
          }}
        >
          {displayedAnswer}
        </ReactMarkdown>
      </div>
      {!isStreaming && metrics && (
        <p className="mt-2 text-[11px] text-muted-foreground/60">
          {metrics.tokensPerSecond.toLocaleString()} tokens/sec • {metrics.queryTimeMs}ms
        </p>
      )}
      <div className="mt-3.5 flex flex-wrap gap-[7px]">
        {citations.map((citation) => (
          <span
            key={citation.id}
            className="inline-flex cursor-pointer items-center gap-[7px] rounded-[7px] border border-border bg-background py-[5px] pr-[9px] pl-1.5 text-[12px] text-muted-foreground hover:border-foreground/20 hover:bg-muted"
          >
            <span
              className="flex items-center justify-center rounded-[5px] text-[9px] font-semibold"
              style={monoTileStyle(citation.tint, 16)}
            >
              {citation.mono}
            </span>
            {citation.source}
          </span>
        ))}
      </div>
    </div>
  );
}
