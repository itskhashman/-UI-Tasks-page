import { useState } from "react";
import { settingsItems, sidebarItems } from "./data/data";
import { SidebarItem } from "./sidebarItem";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [selectedItem, setSelectedItem] = useState<string>("المهام");
  const handleSelect = (title: string) => {
    setSelectedItem(title);
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          bg-[#0F1B31] shadow-md h-full w-80 z-50
          fixed top-0 right-0 transform transition-transform duration-300
          px-8 p-4
          md:relative md:translate-x-0 md:flex-shrink-0 md:z-auto
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        <div className="flex justify-between items-center flex-shrink-0">
          <div className="flex flex-col gap-1">
            <span className="text-[#C9B57A] text-[18.5px] font-bold">
              TechTeek
            </span>
            <span className="text-[#BFC6D5] text-xs font-normal">
              نظام إدارة لمشاريع
            </span>
          </div>
          <div className="bg-[#C9B57A] rounded-full w-10 h-10 flex items-center justify-center"></div>
        </div>

        <div className="flex flex-row rounded-2xl border px-1 py-1 gap-3 border-[#288EC7] bg-[#122943] text-[#216f9e] my-4">
          <div className="font-inter font-medium text-sm rounded-2xl px-5 py-2 bg-[#288EC7] text-[#16243D] whitespace-nowrap">
            إدارة المشاريع
          </div>
          <div className="font-inter font-medium text-sm rounded-2xl px-4 py-2 text-[#288EC7] whitespace-nowrap">
            إدارة التذاكر
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pl-3 space-y-2 sidebar-scroll">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.title}
              {...item}
              isSelected={item.title === selectedItem}
              onClick={() => handleSelect(item.title)}
            />
          ))}

          <span className="text-[#288EC7D9] font-inter font-semibold text-xs p-3">
            الإعدادات العامة
          </span>

          {settingsItems.map((item) => (
            <SidebarItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
