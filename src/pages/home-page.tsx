import { PageLayout } from "@/components/page-layout";
import { rootTabs } from "@/components/navigation/tabs"

export const HomePage = () => (
  <PageLayout NavBarTabs={rootTabs}>
    <p>home</p>
  </PageLayout>
);
