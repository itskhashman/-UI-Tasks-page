import { LucideIcon } from "lucide-react";

interface FilterCardProps {
  icon: LucideIcon;
  title: string;
}

export function FilterButton({ icon: Icon, title }: FilterCardProps) {
  return (
    <div
      className={`flex items-center justify-center gap-[7px] w-[107px] h-10 text-[13px] font-inter font-medium text-[#020817] rounded-lg border border-[#E2E8F0] cursor-pointer`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {title}
    </div>
  );
}
