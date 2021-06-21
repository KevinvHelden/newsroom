import styles from "./articleOverview.module.scss";
import Article, { Article as ArticleProps } from "../article/article";
import Link from "next/link";

type Props = {
  articles: ArticleProps[];
  title: string;
};

export default function ArticleOverview({ articles, title }: Props) {
  return (
    <div className={styles.root}>
      <div>
        <p className="bold">{title}</p>
        <Link href="/articles">
          <a>
            <p>View all</p>
          </a>
        </Link>
      </div>

      <div className={styles.articles}>
        {articles.map((article: any) => (
          <Article {...article} />
        ))}
      </div>
    </div>
  );
}
