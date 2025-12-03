  export interface Task {
    id: number;
    taskTitle: string;
    taskDescription: string;
    department: string;
    project: string;
    priority: string;
    assignee: string;
    startDate: string;
    dueDate: string;
    status: Status | "";
    attachments?: File | null;
  }

export type Status = "للتنفيذ" | "قيد التنفيذ" | "مكتملة" | "متوقفة";
