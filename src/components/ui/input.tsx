import { LucideIcon } from "lucide-react";

interface InputProps {
  Icon?: LucideIcon;
  placeholder: string;
  className?: string;
}

export function Input({ Icon, placeholder, className }: InputProps) {
  return (
    <div className={`relative text-[#64748B] ${className}`}>
      {Icon && (
        <Icon className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6" />
      )}
      <input
        className={`w-64 h-9 ${
          Icon ? "pr-9" : "pr-1"
        }   bg-[#F5F7FA] placeholder:text-[#64748B]  rounded focus:ring-1 focus:ring-[#182B49] outline-[#182B49] ${className}`}
        placeholder={`${placeholder}`}
      />
    </div>
  );
}
