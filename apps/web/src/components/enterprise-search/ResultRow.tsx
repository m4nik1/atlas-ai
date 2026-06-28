import { ArrowUpRight } from "lucide-react";

import type { SearchResult } from "@/lib/enterprise-search/data";
import { monoTileStyle } from "@/lib/enterprise-search/data";

export default function ResultRow({ result }: { result: SearchResult }) {
  return (
    <div className="-mx-3 flex cursor-pointer gap-3.5 rounded-[11px] border border-transparent px-3 py-4 hover:border-border hover:bg-muted">
      <div
        className="flex items-center justify-center rounded-[9px] text-[14px] font-semibold"
        style={monoTileStyle(result.tint, 38)}
      >
        {result.mono}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-[3px] flex items-center gap-2">
          <span className="truncate text-[14.5px] font-medium tracking-tight text-foreground">
            {result.title}
          </span>
          <span className="flex-none rounded-[5px] border border-border bg-muted px-1.5 py-px text-[10.5px] font-medium text-muted-foreground">
            {result.type}
          </span>
        </div>
        <div className="line-clamp-2 text-[13.5px] leading-[1.55] text-muted-foreground text-pretty">
          {result.snippet}
        </div>
        <div className="mt-2 flex items-center gap-2 text-[12px] text-muted-foreground">
          <span className="font-medium text-foreground/70">{result.source}</span>
          <span>·</span>
          <span>{result.author}</span>
          <span>·</span>
          <span>{result.date}</span>
        </div>
      </div>
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        className="flex-none self-center text-muted-foreground opacity-35"
      />
    </div>
  );
}
