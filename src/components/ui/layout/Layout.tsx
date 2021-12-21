import type { CustomLayout } from "next";
import { Sidebar } from "src/components/ui/layout/Sidebar/Sidebar";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="overflow-hidden min-h-screen bg-black">
      <main className="flex">
        <Sidebar />
        <div className="flex-grow text-white">
          <Header />
          {page}
          <Footer />
        </div>
      </main>
    </div>
  );
};
