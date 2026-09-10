import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__top">
        <div>
          <a className="wordmark wordmark--light" href="/" aria-label="O’Opticien, accueil">
            <span className="wordmark__o">O</span><span>opticien</span>
          </a>
          <p className="site-footer__tagline">Des lunettes bien choisies.<br />Un conseil qui prend le temps.</p>
        </div>
        <div className="site-footer__columns">
          <div>
            <p className="footer-label">Navigation</p>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div>
            <p className="footer-label">Boutique</p>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.mapUrl} target="_blank" rel="noreferrer">{site.address.street}<br />{site.address.postalCode} {site.address.city}</a>
          </div>
          <div>
            <p className="footer-label">Suivre</p>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a>
            <a href={site.socials.snapchat} target="_blank" rel="noreferrer">Snapchat ↗</a>
          </div>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} O’Opticien</p>
        <div><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a></div>
        <p className="site-footer__credit">
          Site par <a href="https://janjawish.fr" target="_blank" rel="noopener noreferrer">JanJawish <span aria-hidden="true">↗</span></a>
        </p>
      </div>
    </footer>
  );
}
