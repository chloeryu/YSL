import { connectDB } from "@/util/database"
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  return (
    <div className="list-bg">
      {
        result.map((a, i) =>
        (
          <div className="list-item" key={i}>
            <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
            {/*  <DetailLink /> */} {/* 버튼 */}
            <Link href={'/edit/' + result[i]._id}>👧</Link>
            <p>6월 22일</p>
          </div>
        )
        )
      }
      {/* <div className="list-item">
                <h4>{result[i].title}</h4>
                <p>1월 1일</p>
             </div>
      <div className="list-item">
        <h4>{result[1].title}</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>{result[2].title}</h4>
        <p>1월 1일</p>
      </div> */}
    </div>
  )
}