import React from 'react'
import { useSelector } from 'react-redux'
import { Transition } from 'react-spring/renderprops'

import './Alert.scss'

const Alert = () => {
   const alert = useSelector(state => state.alert)
   const { visible, text, type } = alert

   return (
      <div className='alert-wrapper'>
         <Transition
            items={visible}
            config={{ friction: 20, weight: 400 }}
            from={{ transform: 'translate3d(0, 0rem, 0)', zIndex: 110 }}
            enter={{ opacity: '1', transform: 'translate3d(0, -1rem, 0)', zIndex: 105 }}
            leave={{ opacity: '0', transform: 'translate3d(0, 0rem, 0)', zIndex: 100 }}>
            {visible =>
               visible &&
               (props => (
                  <div className={`alert ${type !== '' ? `alert--${type}` : ''}`} style={props}>
                     {text}
                  </div>
               ))
            }
         </Transition>
      </div>
   )
}

export default Alert
