import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import SearchBar from "../components/Searchbar";
import BreedList from "../components/BreedList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-2 mx-6 justify-items-center items-start">
        <Suspense fallback={<div>Loading Dogs...</div>}>
          <BreedList />
        </Suspense>
      </div>
    </div>
  );
}
