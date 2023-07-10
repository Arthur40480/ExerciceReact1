export default function Container() {

  function handleClick() {
    console.log("Bonne Pratique ! Click !")
  }

  function handleClickWithId(id) {
    console.log(`Voici votre id: ${id}`)
  }

  function handleClickWithIdAndEvent(e, id) {
    console.log(e, id)
  }

  return (
    <div>

      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
    <button onClick={() => console.log("Click !")}>Click</button>
      {/* Mauvaise pratique, peu maintenable */}
    <button onClick={() => {
      console.log("Mauvaise Pratique Attention !")
      console.log("Mauvaise Pratique Attention !")
      console.log("Mauvaise Pratique Attention !")
      console.log("Mauvaise Pratique Attention !")
    }}>Mauvaise Pratique</button>

      {/* On lui préfère en général ceci */}
    <button onClick={handleClick()}>Bonne Pratique</button>

      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
    <button onClick={() => handleClickWithId(21051993)}>Avec argument</button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
    <button onClick={e => handleClickWithIdAndEvent(e, 21051993)}>Avec argument et event</button>
    </div>
  )
}
