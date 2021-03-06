/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
import { HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { Playlists } from "src/components/model/Playlist";

import { SidebarMenuItems } from "./SidebarMenuItems";

const menuItems = {
  first: [
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
      color: "text-blue-500",
      onClick: () => {},
    },
    {
      Icon: RssIcon,
      label: "Your Episodes",
      color: "text-green-500",
      onClick: () => {},
    },
  ],
};

export const Sidebar = () => {
  return (
    <div className="hidden overflow-y-scroll p-5 pb-36 h-screen text-sm text-gray-500 border-r border-gray-900 md:inline-flex lg:text-sm scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem]">
      <div className="space-y-4">
        {Object.values(menuItems).map((items, index) => (
          <SidebarMenuItems items={items} key={index} />
        ))}

        <Playlists />
      </div>
    </div>
  );
};
