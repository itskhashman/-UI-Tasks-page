import { Status } from "../../../../domain/tasks";

export const ColumnColors: Record<Status, string> = {
  "للتنفيذ": "border-t-4 border-blue-500",
  "قيد التنفيذ": "border-t-4 border-yellow-500",
  "مكتملة": "border-t-4 border-green-500",
  "متوقفة": "border-t-4 border-red-500",
};