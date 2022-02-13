import Slider from '@mui/material/Slider';

export default function Sliders({handleChange, coffee, water, cStep, cMin, cMax, wMin, wStep, wMax}) {

return(
  <>        
    <p className="slider__title">Strength</p>
    <Slider
      aria-label="Coffee amount"
      name="coffee" 
      color="secondary" 
      onChange={handleChange} 
      value={coffee} 
      step={cStep}
      min={cMin}
      max={cMax} 
      size="small"
    />
    <div className="button-wrapper">
      <span className="label-slider">weak</span>
      <span className="label-slider">strong</span>
    </div>

    <p className="slider__title">Size</p>
    <Slider 
      aria-label="Water amount"
      name="water" 
      color="secondary" 
      value={water} 
      onChange={handleChange} 
      step={wStep} 
      min={wMin} 
      max={wMax}
      size="small" 
    />
    <div className="button-wrapper">
      <span className="label-slider">small</span>
      <span className="label-slider">big</span>
    </div>
  </>
)}
