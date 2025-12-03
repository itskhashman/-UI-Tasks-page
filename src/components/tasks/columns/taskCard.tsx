import {
  Calendar,
  EllipsisVertical,
  MessageSquare,
  Paperclip,
} from "lucide-react";
import { Task } from "../../../domain/tasks";
import { useDraggable } from "@dnd-kit/core";
import { formatDate } from "../../../lib/time";

interface ColumnCardProps {
  task: Task;
}

export function TaskCard({ task }: ColumnCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id.toString(),
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        zIndex: 100,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="flex flex-col min-h-[198px] bg-white z-50 px-3 py-3  gap-3 border border-[#E2E8F0] rounded-lg outline-none"
    >
      <div className="flex justify-between">
        <span className="font-tajawal whitespace-nowrap">{task.taskTitle}</span>
        <div className="flex items-center">
          <div
            className={`rounded-xl text-[10.7px] px-2 py-[2px] ${
              task.priority === "عالي"
                ? "priority-high"
                : task.priority === "متوسط"
                ? "priority-medium"
                : "priority-low"
            }`}
          >
            {task.priority}
          </div>
          <EllipsisVertical className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="text-sm font-inter text-[#64748B] line-clamp-2">
          {task.taskDescription}
        </div>
      </div>

      <div className="flex flex-row text-xs font-inter text-[#64748B]">
        {task.project}
      </div>

      <div className="flex justify-between pl-2">
        <div className="flex flex-row items-center text-[11.4px] gap-2 font-inter text-[#64748B]">
          <Calendar className="w-3 h-3" />
          {formatDate(task.dueDate)}
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-xs font-inter text-[#64748B]">
          <div className="flex flex-row items-center gap-[3px]">
            <Paperclip className="w-3 h-3 cursor-pointer" />2
          </div>
          <div className="flex flex-row items-center gap-[3px]">
            <MessageSquare className="w-3 h-3 cursor-pointer" />5
          </div>
        </div>
      </div>

      <div className="flex justify-between pl-2">
        <div className="flex flex-row justify-center items-center text-[11.4px] font-inter text-black">
          {task.assignee}
        </div>
        <div className="flex flex-row justify-center items-center w-6 h-6 bg-[#182B49] text-[11.4px] rounded-full font-inter text-white">
          {task.assignee.charAt(0)}
        </div>
      </div>
    </div>
  );
}
