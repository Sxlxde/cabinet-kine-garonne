import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Confiance from "@/components/Confiance";
import Soins from "@/components/Soins";
import Apropos from "@/components/Apropos";
import Stats from "@/components/Stats";
import Equipe from "@/components/Equipe";
import Avis from "@/components/Avis";
import Contact from "@/components/Contact";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#accueil"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main>
        <Hero />
        <Confiance />
        <Soins />
        <Apropos />
        <Stats />
        <Equipe />
        <Avis />
        <Contact />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
