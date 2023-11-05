import { PageLayout } from "@/components/page-layout";
import { Computer } from "lucide-react";
import { itWifiTabs } from "@/components/navigation/tabs";

export const WifiPage = () => (
  <PageLayout NavBarTabs={itWifiTabs}>
    <p>wifi</p>
  </PageLayout>
);
