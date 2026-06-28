import { Activity } from "lucide-react";

import type { TabId } from "@/lib/enterprise-search/data";
import { cn } from "@/lib/utils";

export interface TabView {
  id: TabId;
  label: string;
  count: number;
  active: boolean;
}

interface SearchTabsProps {
  tabs: TabView[];
  onTabChange: (id: TabId) => void;
  resultCountLabel: string;
  accent: string;
}

export default function SearchTabs({
  tabs,
  onTabChange,
  resultCountLabel,
  accent,
}: SearchTabsProps) {
  return (
    <div className="flex-none px-7 pt-4">
      <div className="mx-auto flex max-w-[760px] items-center gap-1 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "-mb-px flex items-center gap-1.5 border-b-2 border-transparent px-3 pt-2 pb-[11px] text-[13.5px] font-medium",
              tab.active ? "text-foreground" : "text-muted-foreground",
            )}
            style={tab.active ? { borderBottomColor: accent } : undefined}
          >
            {tab.label}
            <span
              className="text-[11px] opacity-60"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {tab.count}
            </span>
          </button>
        ))}
        <div className="mt-auto mb-2.5 ml-auto flex items-center gap-1.5 text-[13px] text-muted-foreground">
          <Activity size={14} strokeWidth={2} />
          {resultCountLabel}
        </div>
      </div>
    </div>
  );
}
