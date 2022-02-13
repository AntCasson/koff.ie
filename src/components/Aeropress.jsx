import {useState} from "react"
import style from './style/aeropress.sass';
import Slider from '@mui/material/Slider';
import Timer from "./Timer"
import coffeeIcon from "../assets/coffee.svg"
import waterIcon from "../assets/water.svg"

export default function Aeropress({ coffee }) {
  const [amount, setAmount] = useState({
    coffee: 0.06, 
    water: 240
  })
 
  function handleChange({target}) {
    const name = target.name
    setAmount({ ...amount, [name]: target.value})
  }
  
  return (
    <section className="aeropress-card">
      
        <h2>Aeropress</h2>
        <p className="slider__title">Strength</p>
        <Slider name="coffee" color="secondary" onChange={handleChange} value={amount.coffee} step={0.005} min={0.055} max={0.09} />
        <div className="button-wrapper">
          <span className="label-slider">weak</span>
          <span className="label-slider">strong</span>
        </div>

        <p className="slider__title">Size</p>
        <Slider name="water" color="secondary" value={amount.water} onChange={handleChange} step={10} min={150} max={450} />
        <div className="button-wrapper">
          <span className="label-slider">small</span>
          <span className="label-slider">big</span>
        </div>
        

        <div className="weight-wrapper">
          <div className="weight-wrapper__info">
            <img className="coffee-icon" src={coffeeIcon} />
            <p className="coffee-weight">{(amount.coffee*amount.water).toFixed(1)}<span>gr</span></p>
          </div>

          <div className="weight-wrapper__info">
            <img className="coffee-icon" src={waterIcon} />
            <p className="water-weight">{amount.water}<span>gr</span></p>
          </div>
        </div>
        <Timer />
      
    </section>
  );
}
