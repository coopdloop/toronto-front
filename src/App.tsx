import "./index.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home-page";
import { ItPage } from "@/pages/it-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { SearchPage } from "./pages/search-page";
import { WifiPage } from "./pages/information-tech/wifi-page";

const App = () => {
  return (
    <main className="flex relative w-full flex-col min-h-screen z-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/information-technology" element={<ItPage />} />
        <Route
          path="/search/information-technology/wifi"
          element={<WifiPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
export default App;
