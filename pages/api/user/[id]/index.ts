export default function articleHandler(req: any, res: any) {
  const { id } = req.query;
  res.end(id);
}
