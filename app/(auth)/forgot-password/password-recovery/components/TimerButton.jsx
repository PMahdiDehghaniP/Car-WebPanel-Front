import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'sonner';

const RECOVERY_CODE_TIME = 120;

const TimerButton = ({ email }) => {
  const [time, setTime] = useState(RECOVERY_CODE_TIME);
  const [isTimerStart, setIsTimerStart] = useState(true);
  const [isFirstTimerStart, setIsFirstTimerStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleResendCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BHN}/auth/password/reset/request/`,
        {
          email
        }
      );
      if (response?.status === 200) {
        toast.success('کد بازیابی با موفقیت ارسال شد', { duration: 3000 });
        setTime(RECOVERY_CODE_TIME);
        setIsTimerStart(true);
        setIsFirstTimerStart(false);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        `Failed to send code Error: ${error?.response?.data?.detail}`,
        { duration: 3000 }
      );
    } finally {
      setLoading(false);
    }
  };
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
      loading={loading}
      onClick={handleResendCode}
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
