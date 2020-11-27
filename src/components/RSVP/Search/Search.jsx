import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useInput } from 'hooks'
import { searchGroups } from 'redux/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import './Search.scss'

const Search = () => {
   const [name, bindName, nameError, setNameError] = useInput('')
   const [searching, setSearching] = useState(false)

   const dispatch = useDispatch()

   const handleSubmit = e => {
      e.preventDefault()
      setSearching(true)
      dispatch(searchGroups(name)).then(success => {
         if (!success) {
            setNameError('Could not find guest')
            setSearching(false)
         }
      })
   }

   return (
      <form className='search' onSubmit={handleSubmit}>
         <h1 className='search__heading'>RSVP</h1>
         <span className='search__subheading text-primary'>
            Please enter your name as seen on invitation to let us know if you are coming!
         </span>
         <input className='search__input text-primary' type='text' {...bindName} placeholder='Enter Name' />
         {searching ? (
            <span className='search__submit button button--white text-primary'>
               Searching <FontAwesomeIcon icon={faSpinner} spin />
            </span>
         ) : (
            <input className='search__submit button button--white text-primary' type='submit' value='Search' />
         )}
         <span className='search__error text-secondary'>{nameError}</span>
      </form>
   )
}

export default Search
