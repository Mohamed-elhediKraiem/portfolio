import { Header } from "@/app/_components/Header";
import { Hero } from "@/app/_components/Hero";
import { Contact } from "@/app/_components/Contact";
import { Footer } from "@/app/_components/Footer";
import { Timeline } from "./_components/Timeline";
import { Projects } from "./_components/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
