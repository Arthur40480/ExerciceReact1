import { useRef, useState } from "react"

// useRef sert à :
// 1. Isoler une valeur parmi les mises à jour
// 2. Séléctionner un élément
export default function Container() {

  const [ state, setState] = useState(0)
  const countRef = useRef(0)
  console.log(countRef)

  function handleCountRef() {
    countRef.current++
    console.log(txtRef)
  }

  const txtRef = useRef()
  console.log(txtRef.current)
  return (
    <div>
      <h1>Le hook useRef</h1>

      <p>Valeur de la ref : {countRef.current}</p>
      <p>Valeur du state : {state}</p>
      
      <button onClick={() => handleCountRef()}>On incrémente la ref</button>
      <button onClick={() => setState(state + 1)}>On incrémente le state</button>
    
      <p ref={txtRef}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Enim quisquam ipsam eligendi beatae delectus earum consequuntur 
        consequatur debitis quos voluptatem. Iste tempore libero cumque 
        facilis at necessitatibus consectetur quo molestias.</p>
    </div>
  )
}
