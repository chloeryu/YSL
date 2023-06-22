import { MogoClient } from "mogodb"

export default function Home() {

  MogoClient.connect()

  return (
    <div>안녕</div>
  )
}
