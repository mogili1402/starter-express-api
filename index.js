const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://u9h10biymcwx8lbnlrq1:8GxqndT5sJdLKZTKxGB0@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/b06og4ims3wfkpa?replicaSet=rs0';
const client = new MongoClient(url);

// Database Name
const dbName = 'b06og4ims3wfkpa';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
    collection.insertOne({nmae:"mog"})
  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(()=>{
app.listen(process.env.PORT || 3000)
}
)
  .catch(console.error)
  .finally(() => client.close());





