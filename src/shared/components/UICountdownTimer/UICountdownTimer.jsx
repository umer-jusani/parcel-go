import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const UICountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const now = dayjs()
    const bidDeadline = dayjs(deadline)

    if (bidDeadline.isBefore(now)) {
      return '00d : 00h : 00m : 00s' // Ensure no negative values
    }

    const diff = dayjs.duration(bidDeadline.diff(now))

    return `${diff.days()}d : ${diff.hours()}h : ${diff.minutes()}m : ${diff.seconds()}s`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <span>{timeLeft}</span>
}

export default UICountdownTimer

// import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import duration from "dayjs/plugin/duration";

// dayjs.extend(duration);

// const UICountdownTimer = ({ deadline }) => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   function calculateTimeLeft() {
//     const now = dayjs();
//     const bidDeadline = dayjs(deadline);
//     const diff = dayjs.duration(bidDeadline.diff(now));

//     return `${diff.days()}d : ${diff.hours()}h : ${diff.minutes()}m : ${diff.seconds()}s`;
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <span>{timeLeft}</span>;
// };

// export default UICountdownTimer;
