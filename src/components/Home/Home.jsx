import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { clearRsvp } from 'redux/actions'

import Banner from './Banner/Banner'
import Details from './Details/Details'
import Footer from './Footer/Footer'
import WeddingParty from './WeddingParty/WeddingParty'
import Photos from './Photos/Photos'
import Registry from './Registry/Registry'

const Home = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clearRsvp())
   }, [dispatch])

   return (
      <div className='home'>
         {/* <Header /> */}
         <Banner />
         <Details />
         <Photos />
         <Registry />
         <WeddingParty />
         <Footer />
      </div>
   )
}

export default Home
