import { NextApiRequest, NextApiResponse } from "next";
// api routes
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
