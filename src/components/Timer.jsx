import { useTimer } from 'use-timer';
import style from "./style/Timer.sass"
import Button from '@mui/material/Button';



export default function Timer() {
  const { time, start, pause, reset, status } = useTimer({
    endTime: 0,
    initialTime: 180,
    timerType: 'DECREMENTAL',
  });

  return (
    <>
      <div className="button-wrapper">
        
          <Button color="secondary" variant="contained" onClick={start}>Start</Button>
          <Button color="secondary" variant="outlined" onClick={pause}>Pause</Button>
          <Button color="secondary" variant="outlined" onClick={reset}>Reset</Button>
        
      </div>
      <p>Elapsed time: {time}</p>
      {status === 'RUNNING' && <p>Running...</p> || status === 'STOPPED' && <p>drink!</p>}
    </>
  );
};
