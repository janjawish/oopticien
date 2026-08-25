type Props = {
  href: string;
  children: React.ReactNode;
  inverted?: boolean;
  external?: boolean;
};

export function ArrowLink({ href, children, inverted = false, external = false }: Props) {
  return (
    <a
      className={`arrow-link${inverted ? " arrow-link--inverted" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="arrow-link__icon">↗</span>
    </a>
  );
}
