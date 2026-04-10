import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="https://placecats.com/neo/300/200" alt="Picture of cats" width={500} height={500} />
    </div>
  );
}
