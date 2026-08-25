import { ArrowLink } from "@/components/ui/ArrowLink";
import { site } from "@/data/site";

export function PracticalSection() {
  return (
    <section className="practical" data-reveal>
      <div className="shell practical__grid">
        <div className="practical__title">
          <p className="section-index">05 — Venir</p>
          <h2>Passez en<br /><em>boutique.</em></h2>
        </div>
        <div className="practical__address">
          <p>{site.address.street}<br />{site.address.postalCode} {site.address.city}</p>
          <ArrowLink href={site.mapUrl} external>Obtenir l’itinéraire</ArrowLink>
        </div>
        <div className="practical__hours">
          {site.hours.map((row) => (
            <div key={row.days}><span>{row.days}</span><span>{row.time}</span></div>
          ))}
        </div>
        <div className="practical__call">
          <p>Une question avant de venir ?</p>
          <a href={`tel:${site.phoneHref}`}>{site.phone}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
