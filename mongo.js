import { default as mongodb } from "mongodb";

let MongoClient = mongodb.MongoClient;
const client = new MongoClient(
  "mongodb+srv://admin:admin@cluster0.9i1az.mongodb.net/?retryWrites=true&w=majority"
);
await client.connect();
const db = client.db();
const collection = db.collection("messages");

collection.insertOne({ messages: "Hello" }, (err, res) => {
  if (err) throw err;
});
