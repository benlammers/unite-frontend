import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearRsvp, hideSuccessModal } from 'redux/actions'

import Banner from './Banner/Banner'
import Details from './Details/Details'
import Footer from './Footer/Footer'
import WeddingParty from './WeddingParty/WeddingParty'
import Photos from './Photos/Photos'
import Registry from './Registry/Registry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
   const dispatch = useDispatch()
   const { showRSVPSuccess } = useSelector(state => state)

   useEffect(() => {
      dispatch(clearRsvp())
   }, [dispatch])

   return (
      <div className='home'>
         <Banner />
         <Details />
         <Photos />
         <Registry />
         <WeddingParty />
         <Footer />

         {showRSVPSuccess && (
            <div className='pop-up'>
               <span className='text-primary'>
                  RSVP Successfully Sent &nbsp;
                  <FontAwesomeIcon icon={faCheck} />
               </span>
               <button
                  className='button button--blue pop-up-single-button'
                  onClick={() => dispatch(hideSuccessModal())}>
                  Close
               </button>
            </div>
         )}
      </div>
   )
}

export default Home
