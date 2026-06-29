import { Search } from "lucide-react";

export default function EmptyState({ query }: { query: string }) {
  return (
    <div className="px-5 py-[70px] text-center text-muted-foreground">
      <div className="mx-auto mb-4 flex size-[46px] items-center justify-center rounded-xl border border-border bg-muted">
        <Search size={20} strokeWidth={2} className="text-muted-foreground" />
      </div>
      <div className="mb-[5px] text-[15px] font-medium text-foreground/80">
        No results for “{query}”
      </div>
      <div className="text-[13.5px]">
        Try a different term or check another integration.
      </div>
    </div>
  );
}
