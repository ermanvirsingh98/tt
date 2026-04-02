import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

type CardProps = {
  slug: string;
  name?: string;
  category?: string;
  author?: string;
  imageUrl: string;
  variant?: "category" | "horizontal" | "vertical";
};

const Card = ({
  slug,
  name,
  category,
  author,
  imageUrl,
  variant = "vertical",
}: CardProps) => {
  if (variant === "category") {
    return (
      <article className={styles.cardCategory}>
        <Link href={slug} className={styles.link}>
          <img src={imageUrl} alt={category} className={styles.imageFull} />
          {name && <p className={styles.categoryLabel}>{name}</p>}
        </Link>
      </article>
    );
  }

  if (variant === "horizontal") {
    return (
      <article className={styles.cardHorizontal}>
        <Link href={slug} className={styles.link}>
          <img src={imageUrl} alt={name} className={styles.imageThumb} />
          <div className={styles.horizontalContent}>
            {category && <p className={styles.categoryLabel}>{category}</p>}
            {name && <h2 className={styles.title}>{name}</h2>}
            {author && <p className={styles.author}>{author}</p>}
          </div>
        </Link>
      </article>
    );
  }

  // vertical (default)
  return (
    <article className={styles.cardVertical}>
      <Link href={slug} className={styles.link}>
        <img src={imageUrl} alt={name} className={styles.imageFull} />
        <div className={styles.verticalContent}>
          {name && <h2 className={styles.title}>{name}</h2>}
          {author && <p className={styles.author}>{author}</p>}
        </div>
      </Link>
    </article>
  );
};

export default Card;
