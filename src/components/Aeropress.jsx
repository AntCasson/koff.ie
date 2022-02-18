import { useState } from "react";
import style from "./style/brewercard.sass";
import Sliders from "./Sliders";
import Timer from "./Timer";
import waterdropIcon from "../assets/waterdrop.svg";
import beansIcon from "../assets/beans.svg";

export default function Aeropress() {
  const [amount, setAmount] = useState({
    coffee: 0.055,
    water: 200,
    brewTime: 190
  });

  function handleChange({ target }) {
    const name = target.name;
    setAmount({ ...amount, [name]: target.value });
  }

  return (
    <section className='brewer-card'>
      <h2>Aeropress</h2>

      <Sliders
        cStep={0.004}
        cMin={0.05}
        cMax={0.07}
        wStep={10}
        wMin={150}
        wMax={240}
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

        <div aria-label='water weight' className='weight-wrapper__info'>
          <img
            className='coffee-icon'
            alt='water drop image'
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
