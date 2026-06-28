import { Search, Send } from "lucide-react";

import { PROMPTS, SOURCE_META, monoTileStyle } from "@/lib/enterprise-search/data";

interface SearchHeroProps {
  query: string;
  onQueryChange: (value: string) => void;
  onPromptClick: (prompt: string) => void;
  accent: string;
}

export default function SearchHero({
  query,
  onQueryChange,
  onPromptClick,
  accent,
}: SearchHeroProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-7 pt-10 pb-20">
      <div className="flex w-full max-w-[680px] flex-col items-center">
        <div
          className="mb-[22px] flex size-[46px] items-center justify-center rounded-xl text-white"
          style={{ background: accent }}
        >
          <Search size={24} strokeWidth={2.2} />
        </div>

        <div className="mb-1.5 text-[13px] font-medium text-muted-foreground">
          Good afternoon, Dana
        </div>
        <h1 className="mb-[26px] text-center text-[26px] font-semibold tracking-tight text-foreground">
          What can I help you find?
        </h1>

        <div className="relative w-full">
          <span className="pointer-events-none absolute top-1/2 left-[22px] flex -translate-y-1/2 text-muted-foreground">
            <Search size={20} strokeWidth={2.2} />
          </span>
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search or ask anything across your tools…"
            autoFocus
            className="h-[60px] w-full rounded-full border border-border bg-background pr-[132px] pl-[54px] text-[16px] text-foreground shadow-[0_4px_18px_rgba(24,24,27,0.06),0_1px_2px_rgba(24,24,27,0.04)] outline-none focus:border-foreground focus:shadow-[0_0_0_4px_rgba(24,24,27,0.06),0_4px_18px_rgba(24,24,27,0.08)]"
          />
          <div className="absolute top-1/2 right-[9px] flex -translate-y-1/2 items-center gap-[7px]">
            <button
              type="button"
              className="flex h-[42px] items-center gap-[7px] rounded-full pr-[17px] pl-[15px] text-[13.5px] font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: accent }}
            >
              <Send size={15} strokeWidth={2.2} />
              Ask AI
            </button>
          </div>
        </div>

        <div className="mt-[18px] flex flex-wrap justify-center gap-2">
          {PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => onPromptClick(prompt)}
              className="rounded-full border border-border bg-background px-3.5 py-2 text-[13px] text-muted-foreground hover:border-foreground/20 hover:bg-muted hover:text-foreground"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="mt-[34px] flex items-center gap-[7px] text-[12px] text-muted-foreground">
          <span>Searching across</span>
          {SOURCE_META.map((source) => (
            <span
              key={source.key}
              className="flex items-center justify-center rounded-[5px] text-[10px] font-semibold"
              style={monoTileStyle(source.tint, 20)}
            >
              {source.mono}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
