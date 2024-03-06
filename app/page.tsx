import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import IntroSection from "@/components/intro-section";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
