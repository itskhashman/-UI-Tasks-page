import { Task } from "../../../domain/tasks";
import { TaskCard } from "./taskCard";

import { Status } from "../../../domain/tasks";
import { ColumnColors } from "./helper/columnColors";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  name: Status;
  task: Task[];
}

export function Column({ name, task }: ColumnProps) {
  const { setNodeRef } = useDroppable({ id: name });
  return (
    <div className="flex flex-col gap-7 w-full">
      <div
        className={`flex items-center px-5 py-3 bg-[#F1F5F980] ${ColumnColors[name]} rounded-lg text-lg font-tajawal font-bold shadow-md`}
      >
        {name}
      </div>

      <div
        ref={setNodeRef}
        className="max-h-[350px] overflow-y-auto flex flex-col gap-3"
      >
        {task.length === 0 && (
          <div className="text-center text-gray-400 py-8 z-10">
            لا يوجد مهام
          </div>
        )}
        {task.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
