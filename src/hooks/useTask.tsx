import { useEffect, useState } from "react";
import { Task } from "../domain/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(saved);
  }, []);

  useEffect(() => {
    const handler = () => {
      const updated = JSON.parse(localStorage.getItem("tasks") || "[]");
      setTasks(updated);
    };

    window.addEventListener("tasks-changed", handler);
    return () => window.removeEventListener("tasks-changed", handler);
  }, []);

  const saveTasks = (newTasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    window.dispatchEvent(new Event("tasks-changed"));
  };

  const addTask = (task: Task) => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    saveTasks([...saved, task]);
  };

  const updateTask = (updatedTask: Task) => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    saveTasks(
      saved.map((t: Task) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  const removeTask = (id: number) => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    saveTasks(saved.filter((t: Task) => t.id !== id));
  };

  const getTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status);
  };

  return {
    tasks,
    addTask,
    updateTask,
    removeTask,
    getTasksByStatus,
  };
}
