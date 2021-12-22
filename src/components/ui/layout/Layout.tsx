import type { CustomLayout } from "next";
import { Sidebar } from "src/components/ui/layout/Sidebar/Sidebar";
import { Player } from "src/components/ui/Player";

import { Header } from "./Header";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="overflow-hidden min-h-screen bg-black">
      <main className="flex">
        <Sidebar />
        <div className="overflow-y-scroll flex-grow h-screen text-white scrollbar-hide">
          <Header />
          {page}
        </div>
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
};
