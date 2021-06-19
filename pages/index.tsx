// NextJS components
import Head from "next/head";
import Link from "next/link";

// Components
import Layout, { siteTitle } from "../components/layout/layout";
import Loader from "../components/loader/loader";
import Date from "../components/date/date";
import ArticleOverview from "../components/articleOverview/articleOverview";

// Hooks & Helpers
import useSWR from "swr";
import { fetcher } from "../lib/helper";

export default function Home() {
  const { data, error } = useSWR("http://localhost:3000/api/articles", fetcher);
  console.log(data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="bold">LATEST ARTICLES</p>
        <ArticleOverview articles={data.articles} />
      </section>
    </Layout>
  );
}
