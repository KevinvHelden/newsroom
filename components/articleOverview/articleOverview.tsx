import styles from "./articleOverview.module.scss";
import Article, { Article as ArticleProps } from "../article/article";

type Props = {
  articles: ArticleProps[];
  title: string;
};

export default function ArticleOverview({ articles, title }: Props) {
  return (
    <div className={styles.root}>
      <p className="bold">{title}</p>
      <div className={styles.articles}>
        {articles.map((article: any) => (
          <Article {...article} />
        ))}
      </div>
    </div>
  );
}
