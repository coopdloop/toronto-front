import { PageLayout } from "@/components/page-layout";
import { SearchTile } from "@/components/search-tile";
import { title } from "process";
import { rootTabs } from "@/components/navigation/tabs"

const tiles = [
  {
    title: "IT related searches",
    description: "All searches related to Toronto IT",
    href: "/search/information-technology",
  },
  {
    title: "Commerce related searches",
    description: "All searches related to Toronto Commerce",
    href: "/search/commerce-search",
  },
  {
    title: "Traffic related searches",
    description: "All searches related to Toronto Traffic",
    href: "/search/traffic-search",
  },
  {
    title: "Business related searches",
    description: "All searches related to Toronto Business",
    href: "/search/business-search",
  },
];

export const SearchPage = () => (
  <PageLayout NavBarTabs={rootTabs}>
    <section className="flex flex-col gap-4 p-10 w-full justify-center">
      {tiles.map((tile, i) => (
        <SearchTile
          title={tile.title}
          description={tile.description}
          href={tile.href}
          key={i}
        />
      ))}
    </section>
  </PageLayout>
);
