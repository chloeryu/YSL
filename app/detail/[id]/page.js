import { connectDB } from "@/util/databade"
import { ObjectId } from "mongodb"

export default async function Detail(props) {
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').findOne
    ({
      _id: new ObjectId(props.params.id)
    })
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result && result.title}</h4>{/*  // null을 체크하여 접근 */}
      <p>{result && result.content}</p> {/* // null을 체크하여 접근 */}
    </div>
  )


}
