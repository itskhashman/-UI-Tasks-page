import { MessageSquare, Search } from "lucide-react";
import { Input } from "../ui/input";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="h-[73px] bg-white flex flex-row  justify-center border-b border-[#e7ebf2] items-center">
      <div className="w-10/12 flex flex-row md:justify-end justify-between items-center ">
        <button
          className="md:hidden ml-4"
          onClick={onMenuClick}
          aria-label="فتح القائمة"
        >
          <span className="text-3xl">☰</span>
        </button>
        <div className=" flex flex-row justify-start items-center md:gap-5 gap-2">
          <Input
            placeholder="بحث..."
            Icon={Search}
            className="md:flex hidden"
          />
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="relative md:flex hidden">
              <img
                src="/bell-notification.svg"
                alt="logo"
                className=" w-7 h-7"
              />
              <div className="absolute top-0 left-[1px] rounded-full w-4 h-4 flex justify-center items-center p-2 text-white text-[11px]  bg-[#217BA9] ">
                3
              </div>
            </div>
            <MessageSquare className="w-7 h-7" />
            <img src="avatar.png" alt="logo" className="h-10 w-10 " />
          </div>
        </div>
      </div>
    </header>
  );
}
