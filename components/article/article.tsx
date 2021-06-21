import styles from "./article.module.scss";
import Link from "next/link";
import Date from "../date/date";
import User from "../user/user";

export type Article = {
  id: string;
  title: string;
  date: string;
  author: {
    name: string;
    id: string;
  };
  description: string;
  image?: string;
};

export default function Article({
  id,
  title,
  date,
  author,
  description,
  image,
}: Article) {
  return (
    <div className={styles.root}>
      <Link href={`/articles/${id}`}>
        <div className={styles.imageContainer}></div>
      </Link>

      <div className={styles.articleInfo}>
        <div className={styles.titleContainer}>
          <Link href={`/articles/${id}`}>
            <a>
              <h5>{title}</h5>
            </a>
          </Link>
        </div>
        <div className={styles.info}>
          <div>
            <p>By </p>
            <User user={{ username: author.name, profileId: author.id }} />
          </div>
          <div>
            <p className="caption">
              <Date dateString={date} />
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
