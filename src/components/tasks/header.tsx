import { LayoutDashboard, TableProperties, CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import { ToggleButton } from "./toggleButton";

export function Header({ openModal }: { openModal: () => void }) {
  return (
    <div className="flex w-full md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
      <div className="flex flex-col md:items-start items-center gap-2 mb-1">
        <span className="text-3xl text-[#182B49] font-Tajawal font-bold">
          المهام
        </span>
        <span className="text-[15.3px] text-[#64748B] font-inter font-normal">
          إدارة وتتبع جميع المهام
        </span>
      </div>

      <div className="flex xs:flex-row flex-col items-center gap-2">
        <div className="flex flex-row rounded-lg w-48 h-11 p-1 bg-[#F1F5F9]">
          <ToggleButton icon={LayoutDashboard} label="كانبان" active />
          <ToggleButton icon={TableProperties} label="جدول" />
        </div>

        <Button
          className="w-32 h-10 bg-[#182B49] text-white"
          icon={CirclePlus}
          onClick={openModal}
        >
          مهمة جديدة
        </Button>
      </div>
    </div>
  );
}
