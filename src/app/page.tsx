import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PracticalSection } from "@/components/sections/PracticalSection";
import { brands, collections, reviews, services, site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="home-hero__eyebrow">Opticien indépendant · Mantes-la-Jolie</p>
          <h1>Bien voir.<br /><em>Bien choisir.</em></h1>
          <p className="home-hero__lead">Des montures à essayer, des conseils précis et le temps de trouver ce qui vous va vraiment.</p>
          <div className="home-hero__actions">
            <ArrowLink href="/collections">Découvrir les collections</ArrowLink>
            <a className="text-link" href={`tel:${site.phoneHref}`}>Appeler la boutique</a>
          </div>
        </div>
        <div className="home-hero__visual">
          <Image src="/images/collections/hero.jpg" alt="Monture solaire de la sélection O’Opticien" fill priority sizes="(max-width: 900px) 100vw, 54vw" />
          <p className="image-caption"><span>01</span> Sélection solaire — en boutique</p>
        </div>
        <div className="home-hero__rail"><span>20 rue Porte aux Saints</span><span aria-hidden="true">↓</span></div>
      </section>

      <section className="intro-section" data-reveal>
        <div className="shell intro-section__grid">
          <p className="section-index">01 — La maison</p>
          <div>
            <h2>Une boutique de quartier,<br />un regard <em>très personnel.</em></h2>
            <div className="intro-section__body">
              <p>À deux pas du centre de Mantes-la-Jolie, O’Opticien accompagne adultes et enfants dans le choix de leurs lunettes. Ici, on commence par écouter vos habitudes, vos envies et vos contraintes.</p>
              <p>La sélection réunit montures de vue et solaires, grandes maisons et lignes plus discrètes. Chaque paire est essayée, comparée puis ajustée sur place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="collection-edit" data-reveal>
        <div className="shell collection-edit__head">
          <p className="section-index">02 — La sélection</p>
          <h2>Des formes à vivre,<br />pas seulement à regarder.</h2>
          <ArrowLink href="/collections">Voir les collections</ArrowLink>
        </div>
        <div className="collection-edit__stage shell-wide">
          {collections.slice(0, 2).map((item, index) => (
            <article key={item.title} className={`collection-feature collection-feature--${index + 1}`}>
              <a href="/collections" className="collection-feature__image" aria-label={`Découvrir la collection ${item.title}`}>
                <Image src={item.image} alt={item.alt} fill sizes={index === 0 ? "(max-width: 800px) 88vw, 46vw" : "(max-width: 800px) 72vw, 30vw"} />
              </a>
              <div><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.eyebrow}</p></div>
            </article>
          ))}
          <p className="collection-edit__note">Vue · Solaires · Enfants</p>
        </div>
      </section>

      <section className="expertise" data-reveal>
        <div className="expertise__visual">
          <Image src="/images/collections/detail.jpg" alt="Détail d’une monture sélectionnée par O’Opticien" fill sizes="(max-width: 900px) 100vw, 43vw" />
        </div>
        <div className="expertise__content">
          <p className="section-index">03 — L’accompagnement</p>
          <h2>Prendre le temps<br />du <em>bon réglage.</em></h2>
          <p className="expertise__lead">Le choix d’une monture est visuel. Son confort se joue ensuite au millimètre.</p>
          <div className="service-lines">
            {services.map((service) => (
              <div key={service.number} className="service-line">
                <span>{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div>
              </div>
            ))}
          </div>
          <ArrowLink href="/services">Découvrir tous les services</ArrowLink>
        </div>
      </section>

      <section className="reviews-section" data-reveal>
        <div className="shell reviews-section__head">
          <p className="section-index">04 — Vos mots</p>
          <h2>Revenir, recommander,<br /><em>faire confiance.</em></h2>
        </div>
        <div className="shell reviews-list">
          {reviews.map((review, index) => (
            <blockquote key={review.author}>
              <span className="review-number">0{index + 1}</span>
              <p>“{review.quote}”</p>
              <footer><span>★★★★★</span> {review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="brands-section" data-reveal>
        <div className="shell brands-section__grid">
          <div><p className="section-index">Les maisons</p><h2>Une sélection<br />qui va à l’essentiel.</h2></div>
          <div className="brand-list">
            {brands.map((brand) => <span key={brand}>{brand}</span>)}
          </div>
        </div>
      </section>

      <PracticalSection />
    </>
  );
}
