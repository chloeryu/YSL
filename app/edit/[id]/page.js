import { connectDB } from "@/util/database"

export default async function Edit() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').findOne({ _id: 현재URL에 입력한 id })

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}