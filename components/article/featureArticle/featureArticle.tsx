import styles from "./featureArticle.module.scss";
import Link from "next/link";
import User from "../../user/user";
import Date from "../../date/date";
import Button from "../../button/button";

type Props = {
  id: string;
  title: string;
  date: string;
  author: {
    name: string;
    id: string;
  };
  description: string;
  image?: string;
  topics: string[];
};

export default function FeatureArticle({
  id,
  title,
  date,
  author,
  description,
  image,
  topics,
}: Props) {
  console.log(author);
  return (
    <div className={styles.root}>
      <p className="bold">FEATURE</p>
      <div className={styles.article}>
        <Link href={`/articles/${id}`}>
          <div className={styles.imageContainer}></div>
        </Link>
        <div className={styles.articleInfo}>
          <Link href={`/articles/${id}`}>
            <h1>{title}</h1>
          </Link>
          <div className={styles.details}>
            <User
              user={{
                username: author.name,
                profilePicture: "",
                profileId: author.id,
              }}
              hasPicture
              alignPictureLeft
            />
            <p className={"caption"}>
              <Date dateString={date} />
            </p>
            {topics.map((topic: string, index: number) => {
              return (
                <Link
                  key={index}
                  href={`/search?topics=${topic.toLowerCase()}`}
                >
                  <a>
                    <p className={"caption"}>#{topic}</p>
                  </a>
                </Link>
              );
            })}
          </div>
          <p>{description}</p>
          <Link href={`/articles/${id}`}>
            <Button>Read more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
