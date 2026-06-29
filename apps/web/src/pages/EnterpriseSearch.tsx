import { useMemo, useState } from "react";

import {
  AiAnswer,
  EmptyState,
  ResultsList,
  SearchBar,
  SearchHero,
  SearchTabs,
  SuggestedTasks,
} from "@/components/enterprise-search";
import type { TabView } from "@/components/enterprise-search";
import { useSearch } from "@/context/useSearch";
import { AI_ANSWER, RESULTS, TAB_DEFS } from "@/lib/enterprise-search/data";
import type { TabId } from "@/lib/enterprise-search/data";

interface EnterpriseSearchProps {
  /** Brand accent color for primary actions and active states. */
  accentColor?: string;
  /** Whether the synthesized AI answer card is shown above results. */
  aiAnswer?: boolean;
}

export default function EnterpriseSearch({
  accentColor = "#343cec",
  aiAnswer = true,
}: EnterpriseSearchProps) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<TabId>("all");
  const { searchResults, isStreaming, sendQuery } = useSearch();

  const q = query.trim().toLowerCase();
  const isSearching = q.length > 0;

  // Results matching the query (across title, snippet, source, author).
  const matched = useMemo(() => {
    if (!q) return RESULTS;
    return RESULTS.filter((r) =>
      `${r.title} ${r.snippet} ${r.source} ${r.author}`.toLowerCase().includes(q),
    );
  }, [q]);

  // Tab view-models with live counts from the query-matched set.
  const tabs: TabView[] = TAB_DEFS.map((t) => ({
    id: t.id,
    label: t.label,
    count: t.id === "all" ? matched.length : matched.filter((r) => r.cat === t.id).length,
    active: tab === t.id,
  }));

  const results = tab === "all" ? matched : matched.filter((r) => r.cat === tab);
  const hasResults = results.length > 0;
  const showAi = aiAnswer && isSearching && (hasResults || isStreaming || searchResults);
  const resultCountLabel = `${results.length} ${results.length === 1 ? "result" : "results"}`;

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setTab("all");
  };

  const handleQuerySubmit = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) return;

    handleQueryChange(trimmed);
    void sendQuery(trimmed);
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-background text-foreground antialiased"
      style={{ fontFamily: "var(--font-geist)", fontSize: 14 }}
    >
      <main className="flex min-w-0 flex-1 flex-col">
        {!isSearching ? (
          <SearchHero
            query={query}
            onQueryChange={handleQueryChange}
            onPromptClick={handleQuerySubmit}
            onSubmit={handleQuerySubmit}
            accent={accentColor}
          />
        ) : (
          <>
            <SearchBar
              query={query}
              onQueryChange={handleQueryChange}
              onClear={() => handleQueryChange("")}
              accent={accentColor}
            />
            <SearchTabs
              tabs={tabs}
              onTabChange={setTab}
              resultCountLabel={resultCountLabel}
              accent={accentColor}
            />
            <div className="flex-1 overflow-y-auto px-7 pt-[22px] pb-[60px]">
              <div className="mx-auto max-w-[760px]">
                {showAi && (
                  <>
                    <AiAnswer
                      answer={AI_ANSWER}
                      citations={matched.slice(0, 3)}
                      accent={accentColor}
                    />
                    <SuggestedTasks />
                  </>
                )}
                {hasResults ? <ResultsList results={results} /> : <EmptyState query={query} />}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
