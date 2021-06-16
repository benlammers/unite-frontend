import React from 'react'
import { Link as ScrollLink} from 'react-scroll'
import { Link as RouterLink} from 'react-router-dom'

import Timer from '../Timer/Timer'

import './Banner.scss'

const Banner = () => {



   return (
      <div className='banner'>
         <RouterLink className="banner__rsvp button button--white text-secondary" to="/rsvp">RSVP</RouterLink>

         <div className="banner__content">
            <h1 className="banner__names">Ben &amp; Madison</h1>
            <Timer />
            <h1 className="banner__date heading-secondary">~ 05.06.2021 ~</h1>
         </div>


         <ul className="banner__navigation">
            <li className="banner__link">
               <ScrollLink className="text-secondary" to="details" smooth={true}>
                  Details
               </ScrollLink>
            </li>
            <li className="banner__divider" />
            <li className="banner__link">
               <ScrollLink className="text-secondary" to="photos" smooth={true}>
                  Photos
               </ScrollLink>
            </li>
            <li className="banner__divider" />
            <li className="banner__link">
               <ScrollLink className="text-secondary" to="registry" smooth={true}>
                  Registry
               </ScrollLink>
            </li>
            <li className="banner__divider" />
            <li className="banner__link">
               <ScrollLink className="text-secondary" to="wedding-party" smooth={true}>
                  Wedding Party
               </ScrollLink>
            </li>
         </ul>
      </div>
   )
}

export default Banner
