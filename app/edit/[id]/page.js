import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"


export default async function Edit(props) {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

  /* await db.collection('post').updateOne({ 수정할게시물정보 }, { $set: { title: 'lip' } })

  console.log(result) */

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input name="_id" defaultValue={result._id} />
        <button type="submit">전송</button>
      </form>
    </div>
  )
}