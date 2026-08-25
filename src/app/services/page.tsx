import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { PracticalSection } from "@/components/sections/PracticalSection";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services d’optique",
  description: "Contrôle de la vision, lunettes et lentilles, réparations, ajustages et tiers payant à Mantes-la-Jolie.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro index="02 — Services" title={<>Du choix jusqu’au réglage,<br /><em>un même interlocuteur.</em></>} lead="Une bonne paire de lunettes ne s’arrête pas au choix de la monture. Mesure, ajustage, entretien : chaque étape compte pour votre confort au quotidien." />
      <section className="services-page shell">
        <div className="services-page__visual" data-reveal><Image src="/images/collections/service.jpg" alt="Monture photographiée dans la boutique O’Opticien" fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
        <div className="services-page__list">
          {services.map((service) => (
            <article key={service.number} data-reveal><span>{service.number}</span><div><h2>{service.title}</h2><p>{service.text}</p></div></article>
          ))}
        </div>
      </section>
      <section className="care-note" data-reveal><div className="shell"><p>Un ajustage évolue avec le temps.</p><h2>Une branche se desserre, la monture glisse ou marque davantage ? Passez nous voir : nous contrôlons le réglage directement en boutique.</h2></div></section>
      <PracticalSection />
    </>
  );
}
