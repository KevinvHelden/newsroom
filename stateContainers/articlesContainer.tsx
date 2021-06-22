import { createContainer } from "unstated-next";
import { useState } from "react";
import type { SWRResponse } from "SWR";

type Article = {
  title: string;
  date: string;
  id: string;
  author: {
    name: string;
    id: string;
  };
  description: string;
};

interface FeatureArticle extends Article {
  topics: string[];
}

type ArticleResponse = {
  articles: Article[];
};

type FeatureArticleResponse = {
  featureArticle: FeatureArticle;
};

function useArticles() {
  const [articles, setArticles] =
    useState<SWRResponse<ArticleResponse, Error>>();
  const [featureArticle, setFeatureArticle] =
    useState<SWRResponse<FeatureArticleResponse, Error>>();
  return { articles, setArticles, featureArticle, setFeatureArticle };
}

export const ArticlesProvider = createContainer(useArticles);
