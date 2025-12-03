import { Status } from "../../../domain/tasks";

interface StatusColor {
  background: string;
  text: string;
}

export const statusColors: Record<Status, StatusColor> = {
  "مكتملة": {
    background: "#DCFCE7",
    text: "#16A34A",
  },
  "متوقفة": {
    background: "#FEE2E2",
    text: "#DC2626",
  },
  "قيد التنفيذ": {
    background: "#FEF3C7",
    text: "#D97706",
  },
  "للتنفيذ": {
    background: "#DBEAFE",
    text: "#2563EB",
  },
};
