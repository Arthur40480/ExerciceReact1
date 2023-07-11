export default function Container() {

  const isLogged = false
  let content

  if(isLogged) {
    content = "Bienvenue sur votre compte privé"
  }else {
    content = "Veuillez vous connecter"
  }

  return (
    <div>
      <h1>{content}</h1>
    </div> 
  )
}

// Méthode 1 :
// export default function Container() {

//   const isLogged = false

//   if(isLogged) {
//     return (
//       <div>
//         <h1>Vous êtes connecter</h1>
//       </div>
//     )
//   }
//   else {
//     return (
//       <div>
//         <h1>Vous n'êtes pas connecter</h1>
//       </div>
//     )
//   }
// }