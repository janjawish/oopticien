import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { PracticalSection } from "@/components/sections/PracticalSection";

export const metadata: Metadata = {
  title: "La boutique",
  description: "Découvrez O’Opticien, votre opticien indépendant au 20 rue Porte aux Saints à Mantes-la-Jolie.",
  alternates: { canonical: "/boutique" },
};

export default function BoutiquePage() {
  return (
    <>
      <PageIntro index="03 — La boutique" title={<>Un lieu pour essayer,<br /><em>comparer, décider.</em></>} lead="O’Opticien vous accueille au 20 rue Porte aux Saints, au cœur de Mantes-la-Jolie. Une adresse de proximité pour choisir vos lunettes sans se presser." />
      <section className="boutique-story shell" data-reveal>
        <div className="boutique-story__image"><Image src="/images/collections/boutique-selection.jpg" alt="Monture de la sélection O’Opticien photographiée en boutique" fill sizes="(max-width: 900px) 100vw, 54vw" /></div>
        <div className="boutique-story__copy"><p className="section-index">Notre façon de faire</p><h2>Écouter d’abord.<br />Ajuster ensuite.</h2><p>Votre visage, votre correction et votre quotidien donnent les premiers repères. Nous affinons ensuite le choix avec vous : largeur, pont, hauteur du verre, matière et teinte.</p><p>Ce temps d’essayage permet de repartir avec une monture qui vous ressemble, mais surtout avec une paire confortable et correctement réglée.</p></div>
      </section>
      <section className="values-strip" data-reveal><div className="shell"><span>Conseil</span><span>Choix</span><span>Ajustage</span><span>Suivi</span></div></section>
      <PracticalSection />
    </>
  );
}
