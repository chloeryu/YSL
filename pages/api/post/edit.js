export default async function handler(요청, 응답) {
  if (요청.method == 'post') {
    console.log(요청.body)
    /* const db = (await connectDB).db('forum')
    let result = db.collection('post').updateOne(
      { 어떤 document수정할지 },
      { $set: { 수정할내용 } }
    ) */
  }
}