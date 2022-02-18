import { useState } from "react";
import style from "./style/brewercard.sass";
import Sliders from "./Sliders";
import Timer from "./Timer";
import waterdropIcon from "../assets/waterdrop.svg";
import beansIcon from "../assets/beans.svg";

export default function Cleverdripper() {
  const [amount, setAmount] = useState({
    coffee: 0.06,
    water: 250,
    brewTime: 125
  });

  function handleChange({ target }) {
    const name = target.name;
    setAmount({ ...amount, [name]: target.value });
  }

  return (
    <section className='brewer-card'>
      <h2>Cleverdripper</h2>

      <Sliders
        cStep={0.005}
        cMin={0.03}
        cMax={0.09}
        wStep={10}
        wMin={180}
        wMax={450}
        handleChange={handleChange}
        coffee={amount.coffee}
        water={amount.water}
      />

      <div className='weight-wrapper'>
        <div aria-label='coffee weight' className='weight-wrapper__info'>
          <img className='coffee-icon' alt='coffee beans' src={beansIcon} />
          <p className='coffee-weight'>
            {(amount.coffee * amount.water).toFixed(1)}
            <span>gr</span>
          </p>
        </div>

        <div className='weight-wrapper__info'>
          <img
            aria-label='water weight'
            alt='water drop image'
            className='coffee-icon'
            src={waterdropIcon}
          />
          <p className='water-weight'>
            {amount.water}
            <span>gr</span>
          </p>
        </div>
      </div>
      <Timer totalTime={amount.brewTime} />
    </section>
  );
}
