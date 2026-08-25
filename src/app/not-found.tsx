export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="section-index">Erreur 404</p>
      <h1>Cette page<br /><em>n’existe plus.</em></h1>
      <p>La boutique, elle, est toujours au 20 rue Porte aux Saints.</p>
      <a className="arrow-link" href="/"><span>Revenir à l’accueil</span><span aria-hidden="true">↗</span></a>
    </section>
  );
}
