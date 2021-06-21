import users from "../mockData/users.json";

export default function handler(req: XMLHttpRequest, res: any) {
  res.status(200).json(users);
}
