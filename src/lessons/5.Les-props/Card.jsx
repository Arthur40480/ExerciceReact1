import React from 'react'

export default function Card(props) {
  return (
    <div>
        <p>Voici la Carte id: {props.id}</p>
        <p>State du parent: {props.state}</p>
        <button onClick={() => props.changeState("Buongiorno !")}>Changement de state</button>
    </div>
  )
}
