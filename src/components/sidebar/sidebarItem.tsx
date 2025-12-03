import { ChevronRight, LucideIcon } from "lucide-react";

interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  isSelected?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  title,
  icon: Icon,
  isSelected,
  onClick,
}: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-row rounded-xl h-9 w-full items-center justify-between p-2 gap-3 cursor-pointer
        ${
          isSelected
            ? "bg-[#288EC726] text-white"
            : " hover:bg-[#288EC726] text-white"
        }
        group transition-colors`}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <Icon className={`w-5 h-5 text-[#288EC7]`} />
        <span className="text-[15px] font-normal font-inter">{title}</span>
      </div>

      <ChevronRight
        className={`w-4 h-4 ${
          isSelected ? "text-white" : "text-[#288EC7]"
        } group-hover:text-white transition-colors`}
      />
    </div>
  );
}
