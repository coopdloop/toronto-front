// import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarTabs } from "./nav-bar-tabs";

type NavBarProps = {
  tabs: {
    title: string;
    href: string;
    icon: any;
  }[];
};

const Navigation = (NavBarProps: NavBarProps) => {
  return (
    <span className="flex md:flex-col md:w-fit md:h-screen md:gap-0 flex-row bottom-0 relative items-left justify-center bg-foreground shadow-2xl">
      <NavBarTabs tabs={NavBarProps.tabs} />
    </span>
  );
};

export default Navigation;
