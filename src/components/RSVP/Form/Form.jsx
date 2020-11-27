import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { clearRsvp, nextGuest, prevGuest, submitGroup } from 'redux/actions'
import { useToggle } from 'hooks'

import GuestForm from './GuestForm'

import './Form.scss'

const Form = () => {
   const dispatch = useDispatch()
   const history = useHistory()

   const [submitting, setSubmitting] = useState(false)
   const [showConfirm, toggleShowConfirm] = useToggle(false)
   const { guestIndex, group } = useSelector(state => state)
   let { guests } = group

   let guest = guests[guestIndex]

   const handlePrev = () => {
      dispatch(prevGuest())
   }

   const handleNext = () => {
      dispatch(nextGuest())
   }

   const handleSubmit = () => {
      toggleShowConfirm()
      setSubmitting(true)
      submitGroup(group).then(success => {
         if (success) {
            dispatch(clearRsvp())
            history.push('/')
         } else setSubmitting(false)
      })
   }

   return (
      <div className='form'>
         <GuestForm guest={guest} key={guest.id} />

         {guestIndex > 0 && (
            <button className='form__prev button button--white text-secondary' onClick={handlePrev}>
               Prev
            </button>
         )}
         <span className='form__number text-secondary'>
            {guestIndex + 1} of {guests.length}
         </span>
         {guestIndex < guests.length - 1 && (
            <button className='form__next button button--white text-secondary' onClick={handleNext}>
               Next
            </button>
         )}
         {guestIndex === guests.length - 1 &&
            (submitting ? (
               <span className='form__submit button button--white text-secondary'>
                  Submitting <FontAwesomeIcon icon={faSpinner} spin />
               </span>
            ) : (
               <button className='form__submit button button--white text-secondary' onClick={toggleShowConfirm}>
                  Submit
               </button>
            ))}

         {showConfirm && (
            <div className='pop-up'>
               <span className='text-primary'>Are you sure you would like to submit your RSVP?</span>
               <button className='button button--black' onClick={toggleShowConfirm}>
                  No
               </button>
               <button className='button button--blue' onClick={handleSubmit}>
                  Yes
               </button>
            </div>
         )}
      </div>
   )
}

export default Form
