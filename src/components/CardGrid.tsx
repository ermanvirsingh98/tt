import React from "react";
import styles from "./CardGrid.module.css";
import Card from "./Card";

type CardItem = {
  slug: string;
  name?: string;
  category?: string;
  author?: string;
  imageUrl: string;
};

type CardGridProps = {
  items: CardItem[];
  variant?: "category" | "horizontal" | "vertical";
  columns?: 2 | 3 | 4;
};

const CardGrid = ({ items, variant = "vertical", columns = 3 }: CardGridProps) => {
  return (
    <div
      className={styles.grid}
      style={{ "--columns": columns } as React.CSSProperties}
    >
      {items.map((item) => (
        <Card key={item.slug} {...item} variant={variant} />
      ))}
    </div>
  );
};

export default CardGrid;
