import style from './style/aeropress.sass';
import Slider from '@mui/material/Slider';
import Timer from "./Timer"

export default function Aeropress({ coffee }) {
  
  console.log(coffee);
  return (
    <section className="aeropress-card">
      <div className="wrapper">
        <h2>Aeropress</h2>
        
        <p>How much coffee is needed today?</p>
        <Slider color="primary" defaultValue={coffee} step={2} min={10} max={50} />
        <div className="button-wrapper">
          <span>weak</span>
          <span>strong</span>
        </div>

        <p>What size cup</p>
        <Slider color="primary" defaultValue={coffee} step={2} min={10} max={50} />
        <div className="button-wrapper">
          <span>tiny cup</span>
          <span>no sleep size</span>
        </div>

        <Timer />
      </div>
    </section>
  );
}
