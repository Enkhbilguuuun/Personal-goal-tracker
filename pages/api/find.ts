// export const user = async(req, res) => {

//     const {id} = req.params
        
//         const user = await User.findById(id);
    
//         if(!user) throw new Error ("not working", 404);
    
//         res.send({
//             data:user
//         });
//     };

import { mongoDataApiRequest } from "@/utils/MongodbUtil";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

    if (req.method !== "GET") {
        res.status(405).end();
        return;
    }

    const {id} = req.query;

    const result = await mongoDataApiRequest('findOne', {filter: {
        _id: { $oid: id } 
    },
    limit: 1
})
    console.log(id)
    res.status(200).json(result)
}