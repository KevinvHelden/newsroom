import styles from "./articleOverview.module.scss";
import Article, { Article as ArticleProps } from "../article/article";
import Link from "next/link";
import Icon from "../icon/icon";

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
          <a className={styles.viewAll}>
            <p>View all</p>
            <Icon type="arrow-right" colour="red" />
          </a>
        </Link>
      </div>

      <div className={styles.articles}>
        {articles.map((article: any, index: number) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}
