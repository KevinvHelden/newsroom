import featureArticle from "../../mockData/featureArticle.json";

export default function handler(req: XMLHttpRequest, res: any) {
  res.status(200).json(featureArticle);
}
