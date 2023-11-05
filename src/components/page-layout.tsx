import React from "react";
import Navigation from "./navigation/nav-bar";
import { PageFooter } from "./page-footer";
import { NavBarTabs } from "./navigation/nav-bar-tabs";

export const PageLayout = ({
  children,
  NavBarTabs,
}: {
  children: React.ReactNode;
  NavBarTabs: {
    title: string;
    href: string;
    icon: any;
  }[];
}) => {
  // const { children, NavBarTabs } = pageLayoutProps;
  return (
    <div className="flex md:flex-col flex-col-reverse overflow-hidden w-full h-full">
      <section className="flex w-full">
        <Navigation tabs={NavBarTabs} />
        {children}
      </section>
      <section>
        <PageFooter />
      </section>
    </div>
  );
};
