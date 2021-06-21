// NextJS components
import Head from "next/head";
import Link from "next/link";

// Components
import Layout, { siteTitle } from "../components/layout/layout";
import Loader from "../components/loader/loader";
import Date from "../components/date/date";
import ArticleOverview from "../components/articleOverview/articleOverview";
import FeatureArticle from "../components/article/featureArticle/featureArticle";

// Hooks & Helpers
import useSWR from "swr";
import { fetcher } from "../lib/helper";

export default function Home() {
  const articles = useSWR("http://localhost:3000/api/articles", fetcher);
  const featureArticle = useSWR(
    "http://localhost:3000/api/articles/featureArticle",
    fetcher
  );

  if (articles.error || featureArticle.error) return <div>Failed to load</div>;
  if (!articles.data || !featureArticle.data) return <Loader />;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeatureArticle {...featureArticle.data.featureArticle} />
      <ArticleOverview
        title={"LATEST ARTICLES"}
        articles={articles.data.articles}
      />
    </Layout>
  );
}
