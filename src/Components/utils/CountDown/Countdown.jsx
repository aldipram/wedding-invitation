import { useEffect, useState } from 'react';

const Countdown = () => {
  const countDownDate = new Date("Apr 11, 2024 08:00:00").getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div className='flex flex-col items-center pb-[5rem] pt-5'>
      <p>Acara dimulai dalam :</p>
      <div>
        {countDown < 0 ? (
          'Acara telah dimulai!'
        ) : (
          <>
            <span>{days} hari </span>
            <span>{hours} jam </span>
            <span>{minutes} menit </span>
            <span>{seconds} detik</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Countdown;