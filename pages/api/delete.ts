import { mongoDataApiRequest } from "@/utils/MongodbUtil";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

  if (req.method !== "DELETE") {
    res.status(405).end();
    return;
}

  const {id} = req.query;
  const {date} = req.body;

  const result = await mongoDataApiRequest('deleteOne', {filter: {
    _id: { $oid: id } 
  }})
  console.log(id)

  // const result = await mongoDataApiRequest('deleteMany', {filter: {}})

  res.status(200).json(result)
}