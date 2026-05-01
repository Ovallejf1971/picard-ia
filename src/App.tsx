import { Nav, Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Servicios } from "@/components/sections/Servicios";
import { Score } from "@/components/sections/Score";
import { Proceso } from "@/components/sections/Proceso";
import { Manifiesto } from "@/components/sections/Manifiesto";
import { Casos } from "@/components/sections/Casos";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Nav />
      <Hero />
      <Problema />
      <Servicios />
      <Score />
      <Proceso />
      <Manifiesto />
      <Casos />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
