'use client';
import { useState, useEffect } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [currentTime, setCurrentTime] = useState({
    time: '',
    date: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);
      setCurrentTime({ time, date });
    };

    updateTime(); // Set the initial time and date
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Schedule your next meeting!
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime.time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{currentTime.date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
