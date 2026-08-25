type Props = {
  index: string;
  title: React.ReactNode;
  lead: string;
};

export function PageIntro({ index, title, lead }: Props) {
  return (
    <section className="page-intro">
      <div className="shell page-intro__grid">
        <p className="section-index">{index}</p>
        <div>
          <h1>{title}</h1>
          <p className="page-intro__lead">{lead}</p>
        </div>
      </div>
    </section>
  );
}
