import { connectDB } from "@/util/databade"
import { ObjectId } from "mongodb"

export default async function Detail() {
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').findOne({
    _id: new ObjectId("6493b5d5b2acd2f031cf40a8")
  })
  console.log(result)
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}
