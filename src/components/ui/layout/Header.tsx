import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { memo } from "react";

export const Header: React.VFC = memo(() => {
  const { data: session } = useSession();
  return (
    <header className="absolute top-5 right-8">
      <div className="flex items-center p-1 pr-2 space-x-3 bg-black rounded-full opacity-90 hover:opacity-80 cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={session?.user?.image ?? "/img/no-profile.png"} alt="" className="w-10 h-10 rounded-full" />
        <h2>{session?.user.name}</h2>
        <ChevronDownIcon className="w-5 h-5" />
      </div>
    </header>
  );
});

Header.displayName = "Header";
