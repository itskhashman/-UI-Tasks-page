import { Info, Clock, Check, User, Funnel, LucideIcon } from "lucide-react";
import { Status } from "../../../domain/tasks";

interface StatusItem {
  icon: LucideIcon;
  title: Status;
}
export const statusConfig: StatusItem[] = [
  { icon: Info, title: "للتنفيذ" },
  { icon: Clock, title: "قيد التنفيذ" },
  { icon: Check, title: "مكتملة" },
  { icon: Info, title: "متوقفة" },
];

interface FilterItem {
  icon: LucideIcon;
  title: string;
}

export const filterConfig: FilterItem[] = [
  { icon: User, title: "مهامي" },
  { icon: Funnel, title: "القسم" },
  { icon: Funnel, title: "الأولوية" },
  { icon: Funnel, title: "الحالة" },
  { icon: Funnel, title: "المشروع" },
  { icon: Funnel, title: "المسؤول" },
];
