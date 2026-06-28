import { Search, Send, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onClear: () => void;
  accent: string;
}

export default function SearchBar({ query, onQueryChange, onClear, accent }: SearchBarProps) {
  return (
    <div className="flex-none px-7 pt-[26px]">
      <div className="relative mx-auto max-w-[760px]">
        <span className="pointer-events-none absolute top-1/2 left-[22px] flex -translate-y-1/2 text-muted-foreground">
          <Search size={20} strokeWidth={2.2} />
        </span>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search or ask anything across your tools…"
          autoFocus
          className="h-[58px] w-full rounded-full border border-border bg-background pr-[180px] pl-[54px] text-[16px] text-foreground shadow-[0_2px_10px_rgba(24,24,27,0.05),0_1px_2px_rgba(24,24,27,0.04)] outline-none focus:border-foreground focus:shadow-[0_0_0_4px_rgba(24,24,27,0.06),0_2px_10px_rgba(24,24,27,0.06)]"
        />
        <div className="absolute top-1/2 right-[9px] flex -translate-y-1/2 items-center gap-[7px]">
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X size={15} strokeWidth={2.2} />
          </button>
          <button
            type="button"
            className="flex h-10 items-center gap-[7px] rounded-full pr-4 pl-3.5 text-[13.5px] font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: accent }}
          >
            <Send size={15} strokeWidth={2.2} />
            Ask AI
          </button>
        </div>
      </div>
    </div>
  );
}
