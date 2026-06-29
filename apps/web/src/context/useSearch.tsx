import { trpcClient } from "@/utils/trpc";
import { createContext, useContext, useState, type ReactNode } from "react";

type StreamMetrics = {
    tokensPerSecond: number;
    queryTimeMs: number;
};

type AIContext = {
    searchResults: string;
    isStreaming: boolean;
    metrics: StreamMetrics | null;
    sendQuery: (message: string) => Promise<void>;
}

const SearchContext = createContext<AIContext | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
    const [searchResults, setResults] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);
    const [metrics, setMetrics] = useState<StreamMetrics | null>(null);

    async function sendQuery(message : string) {
        setResults("");
        setMetrics(null);
        setIsStreaming(true);

        try {
            const streamResults = await trpcClient.search.query({ message })

            for await (const chunk of streamResults) {
                if (chunk) {
                    if (typeof chunk === 'object' && chunk.type === 'metadata') {
                        setMetrics({
                            tokensPerSecond: chunk.tokensPerSecond,
                            queryTimeMs: chunk.queryTimeMs
                        });
                    } else if (typeof chunk === 'string') {
                        setResults((results) => results + chunk)
                    }
                }
            }
        } finally {
            setIsStreaming(false);
        }
    }

    return (
        <SearchContext.Provider
            value={{
                searchResults,
                isStreaming,
                metrics,
                sendQuery
            }}
        >
            { children }
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const context = useContext(SearchContext)

    if (!context) {
        throw new Error("useSearch must be used within SearchProvider");
    }

    return context;
}
