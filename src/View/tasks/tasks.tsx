import { Check } from "lucide-react";
import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import { Button } from "../../components/ui/button";
import { StatusCard } from "../../components/tasks/statusCard";
import { useState } from "react";
import { Modal } from "../../components/tasks/task-form/newTaskModel";
import { FilterButton } from "../../components/tasks/filterCard";
import { filterConfig, statusConfig } from "../../components/tasks/data/data";
import { Header } from "../../components/tasks/header";
import { useTasks } from "../../hooks/useTask";
import { Task } from "../../domain/tasks";
import { Column } from "../../components/tasks/columns/column";
import { TaskCard } from "../../components/tasks/columns/taskCard";

export function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, updateTask, getTasksByStatus } = useTasks();
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function handleDragStart(event: any) {
    const { active } = event;
    const taskId = Number(active.id);
    const task = tasks.find((t) => t.id === taskId);
    if (task) setActiveTask(task);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = over.id as Task["status"];

    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    updateTask({
      ...task,
      status: newStatus,
    });
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-9/12 flex flex-col gap-6 py-4">
        <Header openModal={openModal} />

        <div className="grid grid-cols-12 gap-3">
          {statusConfig.map(({ icon, title }) => (
            <div
              key={title}
              className="md:col-span-3 sm:col-span-4 xs:col-span-6 col-span-12"
            >
              <StatusCard
                Icon={icon}
                title={title}
                number={getTasksByStatus(title).length}
              />
            </div>
          ))}
        </div>
        <div className="flex md:justify-between flex-row">
          <div className="flex flex-row flex-wrap gap-2">
            {filterConfig.map((item) => (
              <FilterButton
                key={item.title}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
          <Button
            icon={Check}
            className="text-[#C9B57A] bg-[#0F1B31] h-10 w-36 px-1 whitespace-nowrap"
          >
            المهام المكتملة
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            {statusConfig.map(({ title }) => (
              <div
                key={title}
                className="md:col-span-3 sm:col-span-4 xs:col-span-6 col-span-12"
              >
                <Column name={title} task={getTasksByStatus(title)} />
              </div>
            ))}

            <DragOverlay>
              {activeTask ? <TaskCard task={activeTask} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
