import articles from "../mockData/articles.json";

export default function handler(req: XMLHttpRequest, res: any) {
  res.status(200).json(articles);
}
