import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact et accès",
  description: "Adresse, téléphone et horaires d’O’Opticien à Mantes-la-Jolie. Préparez votre visite au 20 rue Porte aux Saints.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro index="04 — Contact" title={<>À bientôt,<br /><em>en boutique.</em></>} lead="Pour une question sur un service, une monture ou avant votre venue, appelez-nous ou écrivez-nous. Nous vous répondons pendant les horaires d’ouverture." />
      <section className="contact-page shell">
        <div className="contact-page__main" data-reveal>
          <div><p className="section-index">Téléphone</p><a href={`tel:${site.phoneHref}`}>{site.phone}<span>↗</span></a><p>Le moyen le plus direct pour joindre la boutique.</p></div>
          <div><p className="section-index">E-mail</p><a href={`mailto:${site.email}`}>{site.email}<span>↗</span></a><p>Pour une demande qui ne nécessite pas de réponse immédiate.</p></div>
          <div><p className="section-index">Adresse</p><a href={site.mapUrl} target="_blank" rel="noreferrer">{site.address.street}<br />{site.address.postalCode} {site.address.city}<span>↗</span></a><p>Ouvrir l’itinéraire dans Google Maps.</p></div>
        </div>
        <aside className="contact-page__hours" data-reveal><p className="section-index">Horaires</p>{site.hours.map((row) => <div key={row.days}><span>{row.days}</span><span>{row.time}</span></div>)}</aside>
      </section>
      <section className="map-panel"><a href={site.mapUrl} target="_blank" rel="noreferrer"><span>Mantes-la-Jolie</span><strong>20 rue Porte<br />aux Saints</strong><small>Ouvrir l’itinéraire ↗</small></a></section>
    </>
  );
}
