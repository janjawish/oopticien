import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { PracticalSection } from "@/components/sections/PracticalSection";
import { brands, collections } from "@/data/site";

export const metadata: Metadata = {
  title: "Collections de lunettes",
  description: "Découvrez les lunettes de vue, solaires et montures enfant proposées chez O’Opticien à Mantes-la-Jolie.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <PageIntro index="01 — Collections" title={<>Trouver une forme.<br /><em>Affirmer un regard.</em></>} lead="Notre sélection se découvre en boutique, devant un miroir et sous plusieurs angles. Nous vous aidons à comparer les lignes, la matière et le confort de chaque monture." />
      <section className="collections-page shell">
        {collections.map((item, index) => (
          <article className={`collection-row collection-row--${index + 1}`} key={item.title} data-reveal>
            <div className="collection-row__image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className="collection-row__copy"><p>{item.eyebrow}</p><h2>{item.title}</h2><span>{item.text}</span><small>0{index + 1}</small></div>
          </article>
        ))}
      </section>
      <section className="brand-directory" data-reveal>
        <div className="shell brand-directory__grid">
          <div><p className="section-index">Les marques</p><h2>Des signatures<br />complémentaires.</h2><p>La disponibilité des modèles évolue au fil des arrivages. Appelez-nous si vous recherchez une monture précise.</p></div>
          <ol>{brands.map((brand, index) => <li key={brand}><span>0{index + 1}</span>{brand}</li>)}</ol>
        </div>
      </section>
      <PracticalSection />
    </>
  );
}
