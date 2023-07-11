import { useState } from "react"
import "./Container.css"


export default function Container() {
  
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`} >
      <h1>Bienvenue sur NotesMania</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Obcaecati commodi natus neque optio quod dicta quibusdam at 
        odit blanditiis, sed accusamus placeat hic ducimus rerum sit v
        oluptatem a aliquam quo.</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Activer le {darkMode ? "Light mode" : "Dark mode"}
      </button>
    </div>
  )
}
