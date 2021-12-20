/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
import { HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { SidebarMenuItems } from "src/components/ui/layout/Sidebar/SidebarMenuItems";

const menuItems = {
  first: [
    {
      Icon: HomeIcon,
      label: "Log out",
      onClick: () => signOut(),
    },
    {
      Icon: HomeIcon,
      label: "Home",
      onClick: () => {},
    },
    {
      Icon: SearchIcon,
      label: "Search",
      onClick: () => {},
    },
    {
      Icon: LibraryIcon,
      label: "Your Library",
      onClick: () => {},
    },
  ],
  seconde: [
    {
      Icon: PlusCircleIcon,
      label: "Create Playlist",
      onClick: () => {},
    },
    {
      Icon: HeartIcon,
      label: "Liked Songs",
      onClick: () => {},
    },
    {
      Icon: RssIcon,
      label: "Your Episodes",
      onClick: () => {},
    },
  ],
};

export const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="p-5 text-sm text-gray-500 border-r border-gray-900">
      <div className="space-y-4">
        {Object.values(menuItems).map((items, index) => (
          <SidebarMenuItems items={items} key={index} />
        ))}

        {/* Playlists */}
        <p className="hover:text-white cursor-pointer">Playlists... </p>
      </div>
    </div>
  );
};
