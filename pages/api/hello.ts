// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const express = require('express');
var app = express();
const MongoClient=require('mongodb').MongoClient;
const cors = require('cors');
const multer = require('multer');
const port = 3000;

app.use(cors());

const CONNECTION_STRING = "mongodb+srv://billythe2008:3uPreqwAspT7XvKw@pgt.iiqv4.mongodb.net/";

type Data = {
  name: string;
};

type Dates = {
  dates: string[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Dates>) {
  res.json({ "dates": ["2022-01-01", "2022-01-02", "2022-01-03"] });
};

app.listen(5000, () => console.log("Listening on port 5000"));