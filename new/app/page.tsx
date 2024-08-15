import CardParallax from "@/components/CardParallax";
import Footer from "@/components/Footer";
import MaskEffect from "@/components/MaskEffect";
import TextClip from "@/components/TextClip";
import TextMove from "@/components/TextMove";
import Approach from "@/components/Approach";
import { GeminiEffect } from "@/components/GeminiEffect";
import StickyCursor from "@/components/StickyCursor";
import { Projects } from "@/components/Projects";
import { CardEffect } from "@/components/CardEffect";
import { PinEffect } from "@/components/PinEffect";

export default function Home() {
  return (
    <main className="bg-black relative">
      {/* <StickyCursor /> */}
      <section id="about" className="relative">
        <TextMove />
      </section>
      <section className="relative">
        <MaskEffect />
      </section>
      <section className="relative">
        <Approach />
      </section>
      <section id="projects" className="relative">
        <CardParallax />
      </section>
      <section id="contact" className="relative">
        <TextClip />
      </section>
      <section className="relative">
        <Footer />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <CardEffect />
      </section>
      <section>
        <PinEffect />
      </section>
    </main>
  );
}
