import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setGroup } from 'redux/actions'

import './Groups.scss'

const Groups = () => {
   const dispatch = useDispatch()
   const { groups } = useSelector(state => state)
   const [groupId, setGroupId] = useState(null)

   const handleSelect = group => {
      if (group.rsvp) setGroupId(group.id)
      else dispatch(setGroup(group.id))
   }

   return (
      <ul className='groups'>
         {groups.map((group, index) => (
            <li className='group' key={index}>
               <ul className='group__guests'>
                  {group.guests.map((guest, index) => (
                     <li className='guest' key={index}>
                        <h3 className='heading-secondary'>{guest.name}</h3>
                     </li>
                  ))}
               </ul>
               <button
                  className='group__button button button--black text-secondary'
                  onClick={() => handleSelect(group)}>
                  This is {group.guests.length > 1 ? 'Us' : 'Me'}
               </button>
            </li>
         ))}
         {groupId && (
            <div className='pop-up'>
               <span className='text-primary'>
                  The RSVP for this group has already been submitted. To submit changes to the RSVP be sure to press
                  submit at the end of the form.
               </span>
               <button className='button button--black' onClick={() => setGroupId(null)}>
                  Back
               </button>
               <button className='button button--blue' onClick={() => dispatch(setGroup(groupId))}>
                  Continue
               </button>
            </div>
         )}
      </ul>
   )
}

export default Groups
