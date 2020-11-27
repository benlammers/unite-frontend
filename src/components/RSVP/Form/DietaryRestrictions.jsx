import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

import { addDietaryRestriction, removeDietaryRestriction } from 'redux/actions'

const RestrictionOptions = [
   {
      label: 'Gluten-Free',
      value: 'GLUTEN-FREE',
   },
   {
      label: 'Vegan',
      value: 'VEGAN',
   },
   {
      label: 'Vegetarian',
      value: 'Vegetarian',
   },
   {
      label: 'Dairy-Free',
      value: 'DAIRY-FREE',
   },
   {
      label: 'Other',
      value: 'OTHER',
   },
]

const DietaryRestrictions = ({ dietary_restrictions }) => {
   const dispatch = useDispatch()

   const handleDietaryRestrictions = event => {
      const { target } = event
      if (target.checked) dispatch(addDietaryRestriction(target.value))
      else dispatch(removeDietaryRestriction(target.value))
   }

   return (
      <div className='dietary-restrictions'>
         <h3 className='heading-tertiary'>Dietary Restrictions</h3>
         <span className='text-tertiary'>Tick any that apply</span>
         <div className='dietary-restrictions__options'>
            {RestrictionOptions.map((restriction, index) => {
               let checked = dietary_restrictions.includes(restriction.value)
               return (
                  <label className='text-secondary' key={index}>
                     <input
                        type='checkbox'
                        value={restriction.value}
                        checked={checked}
                        onChange={handleDietaryRestrictions}
                     />
                     {checked ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faSquare} />}
                     {restriction.label}
                  </label>
               )
            })}
         </div>
      </div>
   )
}

export default DietaryRestrictions
