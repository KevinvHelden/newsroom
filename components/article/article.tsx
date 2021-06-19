import styles from "./article.module.scss";
import Link from "next/link";
import Date from "../date/date";

export type Article = {
  link: string;
  title: string;
  date: string;
  author: {
    name: string;
    link: string;
  };
  description: string;
  image?: string;
};

export default function Article({
  link,
  title,
  date,
  author,
  description,
  image,
}: Article) {
  return (
    <div className={styles.root}>
      <Link href={link}>
        <div className={styles.imageContainer}></div>
      </Link>
      <div className={styles.articleInfo}>
        <Link href={link}>
          <a>
            <h5>{title}</h5>
          </a>
        </Link>
        <div className={styles.info}>
          <p>
            By <Link href={author.link}>{author.name}</Link>
          </p>

          <p className="caption">
            <Date dateString={date} />
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
