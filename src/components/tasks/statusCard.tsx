import { LucideIcon } from "lucide-react";
import { statusColors } from "./helper/statusColors";
import { Status } from "../../domain/tasks";

interface TaskCardProps {
  Icon: LucideIcon;
  title: Status;
  number: number;
}

export function StatusCard({ Icon, title, number }: TaskCardProps) {
  const colors = statusColors[title];

  return (
    <div className="flex items-center justify-between p-4 py-3 border border-[#E2E8F0] rounded-lg">
      <div className="flex items-center gap-3">
        <div
          style={{
            backgroundColor: colors?.background,
            color: colors?.text,
          }}
          className="w-9 h-9 flex items-center justify-center rounded-lg"
        >
          {Icon && <Icon className="w-5 h-5" style={{ color: colors?.text }} />}{" "}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-normal text-[#64748B]">
            {title}
          </span>
          <span className="text-2xl font-bold text-[#020817]">{number}</span>
        </div>
      </div>
    </div>
  );
}
