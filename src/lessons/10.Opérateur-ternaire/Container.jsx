import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [ validation, setValidation] = useState(false)

  return (
    <form>
      <label htmlFor="consent">Acceptez-vous ?</label>
      <input onClick={() => setValidation(!validation)} type="checkbox" />
      
      {/* <p sytle={{color: validation ? "yellow" : "red"}}></p> */}
      <p className={validation ? "valid" : "not-valid"}>
       
        {validation ? "Bravo, vous pouvez envoyer le formulaire!" :
        "Vous devez cocher la case!" }
      </p>
      <p>{validation ? <p>True</p> : <p>False</p>}</p>
    </form>
  )
}
