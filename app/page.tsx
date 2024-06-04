import Camp from "@/components/globals/Home/Camp";
import Features from "@/components/globals/Home/Features";
import Guide from "@/components/globals/Home/Guide";
import Hero from "@/components/globals/Home/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Camp />
      <Guide />
      <Features />
    </main>
  );
}
