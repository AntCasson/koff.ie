import { useTimer } from 'use-timer';
import style from "./style/Timer.sass"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export default function Timer() {
  const { time, start, pause, reset, status } = useTimer();

  return (
    <>
      <div className="wrapper">
        <ButtonGroup color="secondary" variant="contained" aria-label="outlined primary button group">
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
          <Button onClick={reset}>Reset</Button>
        </ButtonGroup>
      </div>
      <p>Elapsed time: {time}</p>
      {status === 'RUNNING' && <p>Running...</p>}
    </>
  );
};
