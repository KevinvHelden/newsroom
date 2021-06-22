// Components
import Layout from "../../../components/layout/layout";
import DataLoader from "../../../components/dataLoader/dataLoader";

// Hooks & Helpers
import { useRouter } from "next/router";
import { fetcher } from "../../../lib/helper";
import { useEffect } from "react";
import useSWR from "SWR";

// State Providers
import { ArticlesProvider } from "../../../stateContainers/articlesContainer";

export default function Article() {
  const { articles, setArticles } = ArticlesProvider.useContainer();
  const { query } = useRouter();
  const fetchedArticles = useSWR(`articles`, fetcher);
  const selectedArticle = articles?.data?.articles.find(
    (article: any) => article.id === query.id
  );

  useEffect(() => {
    !articles && setArticles(fetchedArticles);
  }, []);

  return (
    <DataLoader data={[articles]}>
      {articles && (
        <Layout>
          {selectedArticle ? (
            <h1>{selectedArticle.title}</h1>
          ) : (
            <h5>Sorry, this article doesn't exist</h5>
          )}
        </Layout>
      )}
    </DataLoader>
  );
}
