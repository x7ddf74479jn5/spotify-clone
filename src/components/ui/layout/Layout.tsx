import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen bg-black max-w-[1500px]">
      <Header />
      <main>{page}</main>
      <Footer />
    </div>
  );
};
