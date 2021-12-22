import { memo } from "react";

import { SidebarMenuItem } from "./SidebarMenuItem";

type SidebarMenuItemsProps = {
  items: Array<
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
      label: string;
      color?: string | undefined;
    } & JSX.IntrinsicElements["button"]
  >;
};

export const SidebarMenuItems: React.VFC<SidebarMenuItemsProps> = memo(({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        const { onClick: handleClick, ...props } = item;
        return <SidebarMenuItem {...props} onClick={handleClick} key={index} />;
      })}
      <hr className="border-gray-900 border-t-[0.1px]" />
    </>
  );
});

SidebarMenuItems.displayName = "SidebarMenuItems";
