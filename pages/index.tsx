// NextJS components
import Head from "next/head";

// Components
import Layout, { siteTitle } from "../components/layout/layout";
import ArticleOverview from "../components/articleOverview/articleOverview";
import FeatureArticle from "../components/article/featureArticle/featureArticle";
import DataLoader from "../components/dataLoader/dataLoader";

// Hooks & Helpers
import useSWR from "SWR";
import { fetcher } from "../lib/helper";
import { useEffect } from "react";

// State Providers
import { ArticlesProvider } from "../stateContainers/articlesContainer";

export default function Home() {
  const { articles, setArticles, featureArticle, setFeatureArticle } =
    ArticlesProvider.useContainer();
  const fetchedArticles = useSWR(`articles`, fetcher);
  const fetchedFeatureArticle = useSWR(`articles/featureArticle`, fetcher);

  useEffect(() => {
    !articles && setArticles(fetchedArticles);
    !featureArticle && setFeatureArticle(fetchedFeatureArticle);
  }, []);

  return (
    <DataLoader data={[articles, featureArticle]}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {featureArticle && featureArticle.data && (
          <FeatureArticle {...featureArticle.data.featureArticle} />
        )}
        {articles && articles.data && (
          <ArticleOverview
            title={"LATEST ARTICLES"}
            articles={articles.data.articles}
          />
        )}
      </Layout>
    </DataLoader>
  );
}
