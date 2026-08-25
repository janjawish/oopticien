"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <a className="wordmark" href="/" aria-label="O’Opticien, accueil">
          <span className="wordmark__o">O</span>
          <span>opticien</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-call" href={`tel:${site.phoneHref}`}>
          <span className="header-call__label">Nous appeler</span>
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " mobile-menu--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navigation mobile">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <a href={`tel:${site.phoneHref}`} tabIndex={open ? 0 : -1}>{site.phone}</a>
          <p>{site.address.street}<br />{site.address.postalCode} {site.address.city}</p>
        </div>
      </div>
    </header>
  );
}
