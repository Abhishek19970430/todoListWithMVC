const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'todoApp';
 
 function main() {
    return client.connect()
    .then(()=>{
     console.log('Connected to server successfully');
     _db = client.db(dbName);
  
    })
    .catch((err)=>{
     console.log(err);
    })
  }



function getDB(){
  if(_db) return _db;
  return null;
}
module.exports = { getDB };
  module.exports.mongoConnect = main;
  



//  function main() {
//   return new Promise((resolve, reject) => {
//     client.connect()
//     .then(()=>{
//      console.log('Connected to server successfully');
//      const db = client.db(dbName);
//     })
//     .catch((err)=>{
//      console.log(err);
//     })
//   })
  
//  }

 


//--------------main function without async await--------//
 
//  async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('documents');
  
//     // the following code examples can be pasted here...
  
//     return 'done.';
//   }