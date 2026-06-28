import { Calendar, ChevronRight, FileText, MessageCircle, Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { TaskDef, TaskIconName } from "@/lib/enterprise-search/data";
import { TASK_DEFS } from "@/lib/enterprise-search/data";

const TASK_ICONS: Record<TaskIconName, LucideIcon> = {
  reply: MessageCircle,
  summary: FileText,
  create: Plus,
  calendar: Calendar,
};

export default function SuggestedTasks() {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[11px] font-semibold tracking-[0.04em] text-muted-foreground uppercase">
          Suggested tasks
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {TASK_DEFS.map((task) => (
          <TaskCard key={task.title} task={task} />
        ))}
      </div>
    </div>
  );
}

function TaskCard({ task }: { task: TaskDef }) {
  const Icon = TASK_ICONS[task.icon];
  return (
    <div className="flex cursor-pointer items-start gap-3 rounded-[11px] border border-border bg-background px-3.5 py-[13px] transition-all hover:border-foreground/20 hover:bg-muted hover:shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <span className="flex size-8 flex-none items-center justify-center rounded-lg bg-muted text-muted-foreground">
        <Icon size={16} strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-0.5 text-[13.5px] font-medium tracking-tight text-foreground">
          {task.title}
        </div>
        <div className="text-[12.5px] leading-[1.45] text-muted-foreground">{task.desc}</div>
      </div>
      <ChevronRight size={15} strokeWidth={2.2} className="mt-0.5 flex-none text-border" />
    </div>
  );
}
