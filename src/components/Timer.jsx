import { useTimer } from 'use-timer';
import style from "./style/Timer.sass"
import Button from '@mui/material/Button';
import react, {useState, useEffect} from "react"

export default function Timer() {
  const [coffeeInstruction, setCoffeeInstruction] = useState("Press brew to start")
  const { time, start, pause, reset, status } = useTimer({
    endTime: 0,
    initialTime: 130,
    timerType: 'DECREMENTAL',
  });

  useEffect(() => {
    if(status === 'RUNNING' && time > 120) {
        setCoffeeInstruction("Stir gently")
    }
    if(status === 'RUNNING' && time < 120 && time > 100) {
        setCoffeeInstruction("Brewing...")
    }
    if(status === 'RUNNING' && time < 100 && time > 75) {
        setCoffeeInstruction("Get your favorite cup ready")
    }
    if(status === 'RUNNING' && time < 75 && time > 60) {
        setCoffeeInstruction("Still brewing away")
    }
    if(status === 'RUNNING' && time < 60 && time > 35) {
        setCoffeeInstruction("One minute left")
    }
    if(status === 'RUNNING' && time < 35 && time > 30) {
        setCoffeeInstruction("Break coffee crust")
    }
    if(status === 'RUNNING' && time < 30 && time > 10) {
        setCoffeeInstruction("Almost done")
    }
    if(status === 'RUNNING' && time < 10 && time >= 0) {
        setCoffeeInstruction("Break coffee crust")
    }
    if(status === 'STOPPED' && time <= 0) {
        setCoffeeInstruction("Enjoy your coffee!")
    }
    if(status === 'STOPPED') {
        setCoffeeInstruction("Press brew to start")
    }



  },[time]
  )
  
   

  return (
    <>
      <div className="button-wrapper">
          <Button 
            color="secondary" 
            variant="outlined" 
            onClick={pause}>Pause
          </Button>
          <Button 
            color="primary" 
            size="large" 
            variant="contained" 
            onClick={start}>Brew
          </Button>
          <Button 
            color="secondary" 
            variant="outlined" 
            onClick={reset }>Reset
          </Button>
        
      </div>
      <p className="timer__time">{time}</p>
      <p className='coffee-instructions'>{coffeeInstruction}</p>

    </>
  );
};
