import React from 'react'
import HoldingImage from './media/holding.jpeg'
import LaughingImage from './media/laughing.jpeg'

import './Details.scss'

const Details = () => {
   return (
      <div className='details'>
         <section className='details__section'>
            <div className='details__block'>
               <h1 className='heading-primary'>Saturday, June 5, 2021</h1>
               <span className='text-primary'>Ceremony: TBD</span>
               <span className='text-primary'>Cocktail Hour: TBD</span>
               <span className='text-primary'>Reception: TBD</span>
            </div>
            <div className='details__block'>
               <h1 className='heading-primary'>The Batawa Chalet</h1>
               <span className='text-primary'>Batawa Ski Hill, Ski Club Lane</span>
               <span className='text-primary'>Quinte West, ON</span>
               <a
                  className='details__button button button--black text-secondary'
                  href='https://www.google.com/maps/dir//Batawa+Ski+Hill,+99+Ski+Club+Ln,+Batawa,+ON+K0K+1E0/@44.1671765,-77.5989381,17z/data=!4m16!1m6!3m5!1s0x89d61785bac54c3b:0x24c8552d49cf1dbf!2sBatawa+Ski+Hill!8m2!3d44.1671765!4d-77.5967494!4m8!1m0!1m5!1m1!1s0x89d61785bac54c3b:0x24c8552d49cf1dbf!2m2!1d-77.5967494!2d44.1671765!3e3'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Directions
               </a>
            </div>
         </section>
         <section className='details__section'>
            <img src={LaughingImage} alt='Ben and Madison Laughing' className='details__photo' />
         </section>
         <section className='details__section'>
            <img src={HoldingImage} alt='Ben Holding Madison' className='details__photo' />
         </section>
         <section className='details__section'>
            <div className='details__block'>
               <h2 className='heading-primary'>Accomodations</h2>
               <span className='text-secondary'>
                  Looking for somewhere to sleep after the reception is over, here is a list of nearby hotels to
                  consider
                  <a href="https://www.wyndhamhotels.com/ramada/trenton-ontario/ramada-trenton-hotel/rooms-rates" target="_blank" rel="noopener noreferrer">
                     Ramada by Wyndham - Trenton
                  </a>
                  <a href="https://www.choicehotels.com/en-ca/ontario/trenton/comfort-inn-hotels/cn313?mc=llyxcncnnbl&pmf=canada" target="_blank" rel="noopener noreferrer">
                     Comfort Inn - Trenton
                  </a>
               </span>
            </div>
            <div className='details__block'>
               <h2 className='heading-primary'>Travel</h2>
               <span className='text-secondary'>
                  We hope no one will have to hold back while celebrating with us late into the night so please remember to organize a ride home
                  <br />
                  <br />
                  Uber does <strong>not</strong> service this location
               </span>
            </div>
         </section>
      </div>
   )
}

export default Details
