import React from 'react'

import './Registry.scss'

const Registry = () => {
   return (
      <div className='registry' id='registry'>
         <h1 className='heading-primary'>Registry</h1>
         <span className='text-primary'>
            Please know that your presence at our wedding is present enough! However, for friends and family who have
            been asking for gift ideas, here is a link to our online registry
         </span>
         <a
            className='button button--white text-primary'
            href='#registry'
            rel='noopener noreferrer'
            target='_blank'>
            View
         </a>
      </div>
   )
}

export default Registry
