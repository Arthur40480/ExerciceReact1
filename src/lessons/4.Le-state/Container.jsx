import { useState } from "react"

export default function Container() {
  const countState = useState(0)
  const [count, setState] = countState

  function handleClick() {
    if(count === 0) {
      setState(99)
    }else {
      setState(0)
    }
  }

  return (
    <div>
      <b>{countState[0]}</b>
      <button onClick={() => handleClick()}>Incrémenter</button>
    </div>
  )
}
