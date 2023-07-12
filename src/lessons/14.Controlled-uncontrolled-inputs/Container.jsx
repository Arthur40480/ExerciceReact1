import { useState, useRef } from "react"
import "./Container.css"

export default function Container() {

  const [state, setState] = useState("")

  function handleInput(e) {
    setState(e.target.value)
  }

  return (
    <div>
      <label htmlFor="name">Votre nom:</label>
      <input 
      onChange={handleInput}
      type="text" 
      id="name" 
      value={state}></input>
      <button>Envoyer</button>

      <label htmlFor="email">Votre email:</label>
      <input type="email" id="email" />

      <p>Votre pseudo : {state ? state : "Rentrez votre pseudo"}</p>
    </div>
  )
}
