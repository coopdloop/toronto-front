import { NavBarTab } from "./nav-bar-tab";

type NavBarTabsProps = {
  tabs: {
    title: string;
    href: string;
    icon: any;
  }[];
};

export const NavBarTabs = (NavBarTabsProps: NavBarTabsProps) => {
  return (
    <div className="flex md:flex-col gap-8 text-white md:pt-4 overflow-y-auto w-full md:w-36 px-2">
      {NavBarTabsProps.tabs.map((tab, index) => {
        return (
          <div
            key={index}
            className="flex items-center hover:bg-purple-800 transition-colors pl-2 rounded-lg w-full py-2 gap-2"
          >
            <tab.icon />
            <NavBarTab path={tab.href} label={tab.title} />
          </div>
        );
      })}
    </div>
  );
};
