import Image from "next/image";
import Approach from "../components/Approach";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Approach />
    </main>
  );
}
