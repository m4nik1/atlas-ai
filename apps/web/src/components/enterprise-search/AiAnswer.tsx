import { Sparkles } from "lucide-react";

import type { SearchResult } from "@/lib/enterprise-search/data";
import { monoTileStyle } from "@/lib/enterprise-search/data";

interface AiAnswerProps {
  answer: string;
  citations: SearchResult[];
  accent: string;
}

export default function AiAnswer({ answer, citations, accent }: AiAnswerProps) {
  return (
    <div className="mb-[22px] border-b border-border px-0 pt-0.5 pb-[22px]">
      <div className="mb-3 flex items-center gap-[9px]">
        <span className="flex" style={{ color: accent }}>
          <Sparkles size={16} fill="currentColor" strokeWidth={0} />
        </span>
        <span className="text-[13px] font-semibold tracking-tight">AI Answer</span>
        <span
          className="rounded-[5px] border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          synthesized · 7 sources
        </span>
      </div>
      <p className="m-0 text-[14.5px] leading-[1.65] text-foreground/80 text-pretty">{answer}</p>
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
