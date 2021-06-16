import React, { useEffect, useState } from 'react'

import './Timer.scss'

const Timer = () => {
   /* const calculateTimeLeft = () => {
      let difference = +new Date('June 5, 21 15:00:00') - +new Date()
      let time = {}
      if (difference > 0) {
         time = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
         }
      }
      return time
   }

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

   useEffect(() => {
      let isMounted = true
      setTimeout(() => {
         if (isMounted) setTimeLeft(calculateTimeLeft())
      }, 1000)
      return () => (isMounted = false)
   }) 

   let days = timeLeft.days.toString().split('')
   let hours = timeLeft.hours.toString().split('')
   let minutes = timeLeft.minutes.toString().split('')
   let seconds = timeLeft.seconds.toString().split('')

   if (seconds.length === 1) seconds = ['0', ...seconds]
   if (minutes.length === 1) minutes = ['0', ...minutes]
   if (hours.length === 1) hours = ['0', ...hours]
   if (days.length === 1) days = ['0', '0', ...days]
   else if (days.length === 2) days = ['0', ...days] */
   
   let days = [0, 0]
   let hours = [0, 0]
   let minutes = [0, 0]
   let seconds = [0, 0]
   
   return (
      <div className='timer'>
         <div className='timer__digits'>
            {days.map((digit, index) => (
               <div className='timer-digit' key={index}>
                  {digit}
               </div>
            ))}
         </div>
         <div className='timer__digits'>
            {hours.map((digit, index) => (
               <div className='timer-digit' key={index}>
                  {digit}
               </div>
            ))}
         </div>
         <div className='timer__digits'>
            {minutes.map((digit, index) => (
               <div className='timer-digit' key={index}>
                  {digit}
               </div>
            ))}
         </div>
         <div className='timer__digits'>
            {seconds.map((digit, index) => (
               <div className='timer-digit' key={index}>
                  {digit}
               </div>
            ))}
         </div>
         <span className='timer__types'>Days</span>
         <span className='timer__types'>Hours</span>
         <span className='timer__types'>Minutes</span>
         <span className='timer__types'>Seconds</span>
      </div>
   )
}

export default Timer
