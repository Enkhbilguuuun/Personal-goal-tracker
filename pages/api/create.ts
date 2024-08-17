import { mongoDataApiRequest } from '@/utils/MongodbUtil';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

    if(req.method !== 'POST') {
        res.status(405).end
};

const { date, goals } = req.body;

const result = await mongoDataApiRequest('insertOne', {document: {date : date, goals : goals}})
console.log(date)

res.status(200).json(result)

}