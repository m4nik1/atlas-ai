import type { SearchResult } from "@/lib/enterprise-search/data";

import ResultRow from "./ResultRow";

export default function ResultsList({ results }: { results: SearchResult[] }) {
  return (
    <div className="flex flex-col">
      {results.map((result) => (
        <ResultRow key={result.id} result={result} />
      ))}
    </div>
  );
}
