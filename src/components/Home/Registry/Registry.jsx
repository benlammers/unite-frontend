import React from 'react'

import './Registry.scss'

const Registry = () => {
   return (
      <div className='registry'>
         <h1 className='heading-primary'>Registry</h1>
         <span className='text-primary'>
            Please know that your presence at our wedding is present enough! However, for friends and family who have
            been asking for gift ideas, here is a link to our online registry
         </span>
         <a
            className='button button--white text-primary'
            href='https://www.myregistry.com/wedding-registry/benjamin-lammers-and-madison-scheerhoorn-belleville-on/2570431/giftlist'
            rel='noopener noreferrer'
            target='_blank'>
            View
         </a>
      </div>
   )
}

export default Registry
