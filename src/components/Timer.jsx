import { useTimer } from "use-timer";
import style from "./style/Timer.sass";
import Button from "@mui/material/Button";
import { useState, useLayoutEffect } from "react";
import { partyTime } from "./timer-functions/partyTime";
import CircularProgress from "@mui/material/CircularProgress";
import cleverInstructions from "./timer-functions/clever-inst";
import aeroInstructions from "./timer-functions/aeropress-instr";

export default function Timer({ totalTime }) {
  const [coffeeInstruction, setCoffeeInstruction] = useState(
    "Let's start brewing"
  );

  const normalize = (value, totalTime) => ((value - 0) * 100) / (totalTime - 0);

  const { time, start, pause, reset, status } = useTimer({
    endTime: 0,
    initialTime: totalTime,
    timerType: "DECREMENTAL"
  });

  useLayoutEffect(() => {
    totalTime < 190
      ? cleverInstructions(time, status, setCoffeeInstruction)
      : aeroInstructions(time, status, setCoffeeInstruction);
  }, [time]);

  return (
    <>
      <div className='button-wrapper'>
        <Button color='secondary' variant='outlined' onClick={pause}>
          Pause
        </Button>
        <Button
          color='secondary'
          size='large'
          variant='contained'
          onClick={start}
        >
          BREW
        </Button>
        <Button color='secondary' variant='outlined' onClick={reset}>
          Reset
        </Button>
      </div>
      <div className='flex-center'>
        <div className='time-progress'>
          <CircularProgress
            size={70}
            color='secondary'
            variant='determinate'
            value={normalize(time, totalTime)}
          />

          {time > 0 ? (
            <p className='small-countdown'>{time + "s"}</p>
          ) : (
            <p className='small-countdown text-xl'>☕</p>
          )}
        </div>
        <p className='coffee-instructions'>{coffeeInstruction}</p>
      </div>

      {time === 0 && partyTime()}
    </>
  );
}
