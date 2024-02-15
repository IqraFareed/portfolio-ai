import About from "@/components/about";
import IntroSection from "@/components/intro-section";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
