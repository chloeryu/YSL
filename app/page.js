import { connectDB } from "@/util/databade.js"
import { MongoClient } from "mongodb"

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div>안녕</div>
  )
}
