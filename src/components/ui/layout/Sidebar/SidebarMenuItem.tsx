type SidebarMenuItemProps = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label: string;
} & JSX.IntrinsicElements["button"];

export const SidebarMenuItem: React.VFC<SidebarMenuItemProps> = ({ Icon, label, onClick: handleClick }) => {
  return (
    <button onClick={handleClick} className="flex items-center space-x-2 hover:text-white">
      {/* <HomeIcon className="w-5 h-5" /> */}
      <Icon className="w-5 h-5" />
      <p>{label}</p>
    </button>
  );
};
