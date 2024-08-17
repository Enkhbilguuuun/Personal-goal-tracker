import { mongoDataApiRequest } from "@/utils/MongodbUtil";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

  if (req.method !== "GET") {
    res.status(405).end();
    return;
}

  const result = await mongoDataApiRequest('find', {})
  res.status(200).json(result)
}