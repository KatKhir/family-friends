import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import SearchBar from "./components/Searchbar";
import Dog from "./components/Dog";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-2 mx-6 justify-items-center">
        <Dog />
        <Dog />
        <Dog />
        <Dog />
        <Dog />
        <Dog />
      </div>
    </div>
  );
}
