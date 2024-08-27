import { mongoDataApiRequest } from "@/utils/MongodbUtil";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

  if (req.method !== "PUT") {
    res.status(405).end();
    return;
}

const {id} = req.query;
const {goals} = req.body



  const result = await mongoDataApiRequest("updateOne", {
    filter: {
      _id: { $oid: id},
    },
    update: {
        $set: {goals : goals}
        
    }
  });

  res.status(200).json(result);
}