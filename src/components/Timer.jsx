import { useTimer } from 'use-timer';
import style from "./style/Timer.sass"
import Button from '@mui/material/Button';

export default function Timer() {
  const { time, start, pause, reset, status } = useTimer({
    endTime: 0,
    initialTime: 130,
    timerType: 'DECREMENTAL',
  });

  return (
    <>
      <div className="button-wrapper">
          <Button color="secondary" variant="outlined" onClick={pause}>Pause</Button>
          <Button color="primary" size="large" variant="contained" onClick={start}>Brew</Button>
          <Button color="secondary" variant="outlined" onClick={reset}>Reset</Button>
        
      </div>
      <p className="timer__time">{time}</p>
      {status === 'RUNNING' && time > 30 && <p>Stirrrr</p>}
    </>
  );
};
