type SidebarMenuItemProps = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label: string;
  color?: string | undefined;
} & JSX.IntrinsicElements["button"];

export const SidebarMenuItem: React.VFC<SidebarMenuItemProps> = ({ Icon, label, color, onClick: handleClick }) => {
  return (
    <button onClick={handleClick} className="flex items-center space-x-2 hover:text-white ">
      <Icon className={`w-5 h-5 ${color}`} />
      <p>{label}</p>
    </button>
  );
};
