export async function mongoDataApiRequest( action, options){
    const result = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-nudkcrn/endpoint/data/v1/action/${action}`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'TpMMvNDEXEwdBu44r4sLM8m4iaX6mCLT1os515yckNS0ZK6gLgw3GcyUNtpDEQBS',
  },
  body: JSON.stringify({
    collection:"Dates",
    database:"Database",
    dataSource:"PGT",
    ...options
  }),
}).then((res) => res.json());

return result
}





// curl --location --request POST 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-nudkcrn/endpoint/data/v1/action/findOne' \
// --header 'Content-Type: application/json' \
// --header 'Access-Control-Request-Headers: *' \
// --header 'api-key: TpMMvNDEXEwdBu44r4sLM8m4iaX6mCLT1os515yckNS0ZK6gLgw3GcyUNtpDEQBS' \
// --data-raw '{
//     "collection":"Dates",
//     "database":"Database",
//     "dataSource":"PGT",
//     "projection": {"_id": 1}
// }'