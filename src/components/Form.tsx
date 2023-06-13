import { useState } from "react"


export default function Form() {
  const [ user, setUser ] = useState("")
  return (
    <form action="">
      <label htmlFor="name"></label>
      <input
        className=""
        type="text"
        id="name"
        placeholder="insira os nomes dos participantes"
        value={user}
      />
      <button type="button"></button>
    </form>
  )
}
