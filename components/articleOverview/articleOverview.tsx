import styles from "./articleOverview.module.scss";
import Article, { Article as ArticleProps } from "../article/article";

type Props = {
  articles: ArticleProps[];
};

export default function ArticleOverview({ articles }: Props) {
  return (
    <div className={styles.root}>
      {articles.map((article: any) => (
        <Article {...article} />
      ))}
    </div>
  );
}
