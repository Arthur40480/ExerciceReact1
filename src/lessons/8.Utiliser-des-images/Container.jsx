import fuji from "./assets/fuji.jpg"
import triangle from "./assets/triangle.svg"

export default function Container() {


  return (
    <div>
      <h1>Utiliser des images</h1>
      <p>Image jpg /png/ webp/ etc</p>
      <img src={fuji} alt="Mont fuji" />

      <p>SVG</p>
      <img src={triangle} alt="triangle" />

    </div>
  )
}
