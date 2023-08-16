import SideBar from "@components/SideBar";
import TopBar from "@components/TopBar";
import MyRouter from "@routes/index";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-white text-base text-neutral-900">
      <div>
        <SideBar isOpen={sidebarOpen} onClose={setSidebarOpen} />
        <div className="lg:pl-72">
          <TopBar onCloseMenu={setSidebarOpen} />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <MyRouter />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
