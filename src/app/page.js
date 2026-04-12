import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import SearchBar from "./components/Searchbar";

export default function Home() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
