import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const RECOVERY_CODE_TIME = 120;

const TimerButton = () => {
  const [time, setTime] = useState(RECOVERY_CODE_TIME);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isFirstTimerStart, setIsFirstTimerStart] = useState(true);

  useEffect(() => {
    if (!isTimerStart) return;

    const timerInterValId = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterValId);
          setIsTimerStart(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterValId);
  }, [isTimerStart]);

  return (
    <Button
      variant="contained"
      disabled={isTimerStart}
      onClick={() => {
        setTime(RECOVERY_CODE_TIME);
        setIsTimerStart(true);
        setIsFirstTimerStart(false);
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isTimerStart ? '#BABABA' : 'primary',
        height: '2.5rem',
        width: '6.2rem'
      }}
    >
      {isTimerStart
        ? `${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`
        : isFirstTimerStart
        ? 'ارسال کد'
        : 'ارسال مجدد'}
    </Button>
  );
};

export default TimerButton;

