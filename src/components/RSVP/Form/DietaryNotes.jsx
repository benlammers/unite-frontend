import React from 'react'
import { useDispatch } from 'react-redux'
import { updateDietaryNotes } from 'redux/actions'

const DietaryNotes = ({ dietary_notes }) => {
   const dispatch = useDispatch()

   const handleDietaryNotes = event => {
      dispatch(updateDietaryNotes(event.target.value))
   }

   return (
      <textarea
         className='dietary-notes text-secondary'
         placeholder='Extra dietary notes'
         value={dietary_notes}
         onChange={handleDietaryNotes}
         rows='4'
      />
   )
}

export default DietaryNotes
