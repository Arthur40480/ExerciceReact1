import React from 'react'

export default function Container() {

    const data = [
        {
            id: 1,
            name: "Arthur"
        },
        {
            id: 2,
            name: "Ambre"
        },
        {
            id: 3,
            name: "Pierre"
        },
        {
            id: 4,
            name: "Pascale"
        },
    ]
  return (
    <div>
        <h1>Créer une liste d'éléments avec React</h1>
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}
