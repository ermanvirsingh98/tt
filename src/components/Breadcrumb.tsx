import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span className="breadcrumb-item" key={index}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="current">{item.label}</span>
          )}

          {index < items.length - 1 && <span className="separator">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
