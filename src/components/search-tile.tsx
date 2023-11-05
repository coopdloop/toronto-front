import React from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon?: any;
};

const SearchTile = (props: Props) => {
  return (
    <a
      className="h-20 bg-slate-300 hover:bg-white/90 text-foreground/80 hover:text-foreground/90 text-2xl font-bold rounded-lg shadow-sm p-4 w-full"
      href={props.href}
    >
      {props.title}
      <p className="text-sm text-blue-500">{props.description}</p>
    </a>
  );
};

export { SearchTile };
