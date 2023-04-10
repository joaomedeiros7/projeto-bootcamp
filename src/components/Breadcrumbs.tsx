import { Link } from "react-router-dom";

export type BreadcrumbsProps = {
  links: { title: string; link: string }[];
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <nav>
      {links.map(({ title, link }, index) => (
        <Link key={index} to={link}>
          {title}{" "}
        </Link>
      ))}
    </nav>
  );
}
