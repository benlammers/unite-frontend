import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

import { updateAttending } from 'redux/actions'

const Attending = ({ attending }) => {
   const dispatch = useDispatch()

   const handleAttending = event => {
      dispatch(updateAttending(event.target.value === 'true'))
   }

   return (
      <div className='attending'>
         <h3 className='heading-tertiary'>Attending:</h3>
         <label className='text-secondary'>
            <input type='radio' value='true' checked={attending} onChange={handleAttending} />
            {attending ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faSquare} />}
            Yes
         </label>
         <label className='text-secondary'>
            <input type='radio' value='false' checked={!attending} onChange={handleAttending} />
            {!attending ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faSquare} />}
            No
         </label>
      </div>
   )
}

export default Attending
