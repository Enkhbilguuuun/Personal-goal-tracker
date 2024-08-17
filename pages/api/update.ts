import { mongoDataApiRequest } from "@/utils/MongodbUtil";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

  if (req.method !== "PUT") {
    res.status(405).end();
    return;
}

const {id} = req.query;
const {date} = req.body



  const result = await mongoDataApiRequest("updateOne", {
    filter: {
      _id: { $oid: id},
    },
    update: {
        $set: {email : date}
        
    }
  });

  res.status(200).json(result);
}