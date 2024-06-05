import CardParallax from "@/components/CardParallax";
import Footer from "@/components/Footer";
import MaskEffect from "@/components/MaskEffect";
import TextClip from "@/components/TextClip";
import TextMove from "@/components/TextMove";
import Approach from "@/components/Approach";
import { GeminiEffect } from "@/components/GeminiEffect";

export default function Home() {
  return (
    <main className="bg-black">
      <div>
        <TextMove />
      </div>
      <div>
        <MaskEffect />
      </div>
      <div>
        <Approach />
      </div>
      <div>
        <GeminiEffect />
        <CardParallax otherClasses="backdrop-blur-[5px]"/>
      </div>
      <div>
        <TextClip />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
