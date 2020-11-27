import React from 'react'
import AOYCImage from './media/aoyc.jpeg'
import WonderlandImage from './media/wonderland.jpeg'
import IcecreamImage from './media/icecream.jpeg'
import WellingtonImage from './media/wellington.jpeg'
import CoverallsImage from './media/coveralls.jpeg'

import './Photos.scss'

const Photos = () => {
   return (
      <div className='photos'>
         <img src={AOYCImage} alt="Ben and Madison at AOYC" id="photo-aoyc"/>
         <img src={WonderlandImage} alt="Ben and Madison at Wonderland" id="photo-wonderland"/>
         <img src={IcecreamImage} alt="Ben and Madion eating icecream" id="photo-icecream"/>
         <img src={WellingtonImage} alt="Ben and Madison at Wellington beach" id="photo-wellington"/>
         <img src={CoverallsImage} alt="Ben and Madison in Queens coveralls" id="photo-coveralls"/>
      </div>
   )
}

export default Photos