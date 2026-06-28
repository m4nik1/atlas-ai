import type { CSSProperties } from "react";

/** A single search result row across a connected source. */
export interface SearchResult {
  id: number;
  title: string;
  snippet: string;
  /** Human-readable source name, e.g. "Google Drive". */
  source: string;
  /** Source key used for filtering / brand colors, e.g. "drive". */
  key: string;
  /** Result kind badge, e.g. "File". */
  type: string;
  /** Tab category this result belongs to. */
  cat: TabId;
  author: string;
  date: string;
  /** Short monogram shown in the source tile. */
  mono: string;
  /** Brand tint hex for the source. */
  tint: string;
}

export interface SourceMeta {
  key: string;
  name: string;
  mono: string;
  tint: string;
}

export type TabId = "all" | "files" | "messages" | "people" | "tickets" | "code" | "events";

export interface TabDef {
  id: TabId;
  label: string;
}

export interface TaskDef {
  title: string;
  desc: string;
  /** lucide-react icon name to render. */
  icon: TaskIconName;
}

export type TaskIconName = "reply" | "summary" | "create" | "calendar";

export const RESULTS: SearchResult[] = [
  {
    id: 1,
    title: "Q4 Revenue Forecast (final).xlsx",
    snippet:
      "Updated model reflecting the search redesign launch impact on conversion. Net new ARR projected at $2.1M for the quarter.",
    source: "Google Drive",
    key: "drive",
    type: "File",
    cat: "files",
    author: "Maya Lopez",
    date: "2d ago",
    mono: "D",
    tint: "#2563eb",
  },
  {
    id: 2,
    title: "Can we ship the search redesign by Friday?",
    snippet:
      "@dana I think the ranking changes need one more review pass, but the UI is ready. Let's sync at 2pm to lock the timeline.",
    source: "Slack",
    key: "slack",
    type: "Message",
    cat: "messages",
    author: "Sarah Chen",
    date: "4h ago",
    mono: "S",
    tint: "#7c3aed",
  },
  {
    id: 3,
    title: "Search Redesign — Product Spec",
    snippet:
      "Goals, scope and success metrics for the unified search experience across all connected integrations and file sources.",
    source: "Notion",
    key: "notion",
    type: "Doc",
    cat: "files",
    author: "Dana Kim",
    date: "1d ago",
    mono: "N",
    tint: "#3f3f46",
  },
  {
    id: 4,
    title: "Sarah Chen",
    snippet:
      "Staff Product Designer · Search & Discovery team · sarah.chen@acme.com · San Francisco",
    source: "Directory",
    key: "people",
    type: "Person",
    cat: "people",
    author: "Design",
    date: "online",
    mono: "SC",
    tint: "#0d9488",
  },
  {
    id: 5,
    title: "BUG-2451: Search latency spike on redesign branch",
    snippet:
      "P95 query time jumped to 840ms after enabling cross-source ranking. Needs index warm-up before Friday's release.",
    source: "Jira",
    key: "jira",
    type: "Ticket",
    cat: "tickets",
    author: "Priya N.",
    date: "6h ago",
    mono: "J",
    tint: "#2563eb",
  },
  {
    id: 6,
    title: "feat: unified search ranking service",
    snippet:
      "Adds blended scoring across Drive, Slack and Notion sources. 12 files changed, awaiting review from @dana before merge.",
    source: "GitHub",
    key: "github",
    type: "Code",
    cat: "code",
    author: "omar-w",
    date: "3h ago",
    mono: "G",
    tint: "#3f3f46",
  },
  {
    id: 7,
    title: "Search Redesign Kickoff",
    snippet:
      "Recurring · Thu 10:00–10:45 · with Sarah Chen, Dana Kim, Priya N. — agenda: scope freeze and launch timeline.",
    source: "Calendar",
    key: "calendar",
    type: "Event",
    cat: "events",
    author: "Acme",
    date: "in 2 days",
    mono: "C",
    tint: "#dc2626",
  },
  {
    id: 8,
    title: "Onboarding Playbook v3",
    snippet:
      "How new hires get access to integrations, request sources, and configure their personal search scope on day one.",
    source: "Notion",
    key: "notion",
    type: "Doc",
    cat: "files",
    author: "People Ops",
    date: "5d ago",
    mono: "N",
    tint: "#3f3f46",
  },
  {
    id: 9,
    title: "Re: redesign launch comms",
    snippet:
      "Draft announcement for the all-hands. Highlighting the new AI answers and cross-tool search. Review by EOD please.",
    source: "Gmail",
    key: "gmail",
    type: "Email",
    cat: "messages",
    author: "Comms",
    date: "1h ago",
    mono: "M",
    tint: "#dc2626",
  },
  {
    id: 10,
    title: "Search engagement dashboard",
    snippet:
      "Weekly active searchers, click-through rate and zero-result rate broken down by integration source.",
    source: "Google Drive",
    key: "drive",
    type: "File",
    cat: "files",
    author: "Analytics",
    date: "3d ago",
    mono: "D",
    tint: "#2563eb",
  },
];

export const SOURCE_META: SourceMeta[] = [
  { key: "drive", name: "Google Drive", mono: "D", tint: "#2563eb" },
  { key: "slack", name: "Slack", mono: "S", tint: "#7c3aed" },
  { key: "notion", name: "Notion", mono: "N", tint: "#3f3f46" },
  { key: "jira", name: "Jira", mono: "J", tint: "#2563eb" },
  { key: "github", name: "GitHub", mono: "G", tint: "#3f3f46" },
  { key: "gmail", name: "Gmail", mono: "M", tint: "#dc2626" },
];

export const TAB_DEFS: TabDef[] = [
  { id: "all", label: "All" },
  { id: "files", label: "Files" },
  { id: "messages", label: "Messages" },
  { id: "people", label: "People" },
  { id: "tickets", label: "Tickets" },
  { id: "code", label: "Code" },
];

export const TASK_DEFS: TaskDef[] = [
  {
    title: "Draft a reply to Sarah",
    desc: "Respond to her Slack about the Friday timeline",
    icon: "reply",
  },
  {
    title: "Summarize the Product Spec",
    desc: "Key goals & scope from the Notion doc",
    icon: "summary",
  },
  {
    title: "Create a Jira ticket",
    desc: "For the P95 latency fix before launch",
    icon: "create",
  },
  {
    title: "Prep the kickoff agenda",
    desc: "Pull notes for the meeting in 2 days",
    icon: "calendar",
  },
];

export const PROMPTS: string[] = [
  "Summarize the search redesign status",
  "What's blocking the Friday launch?",
  "Find docs about onboarding",
  "Show recent Slack from Sarah",
];

export const AI_ANSWER =
  "The search redesign is on track to ship Friday, pending one ranking-quality review and resolution of a P95 latency spike (840ms) flagged in BUG-2451. The UI work is complete and launch comms are drafted; the team meets at the kickoff in 2 days to freeze scope.";

/** Soft background tint paired with each brand foreground tint. */
const TINT_BG: Record<string, string> = {
  "#2563eb": "#eff4ff",
  "#7c3aed": "#f5f0ff",
  "#3f3f46": "#f4f4f5",
  "#0d9488": "#effbf8",
  "#dc2626": "#fef2f2",
};

export function tintBg(tint: string): string {
  return TINT_BG[tint] ?? "#f4f4f5";
}

/** Inline style for a square source monogram tile (brand-colored, data-driven). */
export function monoTileStyle(tint: string, size: number): CSSProperties {
  return {
    color: tint,
    background: tintBg(tint),
    fontFamily: "var(--font-geist-mono)",
    width: size,
    height: size,
    minWidth: size,
  };
}
