import Layout from "../../../components/layout/layout";
import Date from "../../../components/date/date";
import Loader from "../../../components/loader/loader";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../lib/helper";

export default function Article() {
  const { query } = useRouter();
  const { data, error } = useSWR(`http://localhost:3000/api/articles`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Loader />;

  const article = data.articles.find((article: any) => article.id === query.id);

  if (article) {
    return (
      <Layout>
        <h1>{article.title}</h1>
        <Date dateString={article.date} />
      </Layout>
    );
  } else {
    return <h1>Couldn't find your article</h1>;
  }
}
