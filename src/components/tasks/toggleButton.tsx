export function ToggleButton({
  icon: Icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex w-[86px] justify-center items-center gap-2 font-inter font-medium text-sm rounded-lg whitespace-nowrap 
        ${active ? "bg-white text-[#020817]" : "text-[#020817]"}`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </div>
  );
}
