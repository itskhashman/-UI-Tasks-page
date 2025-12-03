import { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Tasks } from "./View/tasks/tasks";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div dir="rtl" className="flex w-full h-screen overflow-hidden bg-white">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 overflow-auto">
        <div className="w-full">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>
        <div className="w-full">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
