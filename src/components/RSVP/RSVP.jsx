import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { clearGroup, clearGroups } from 'redux/actions'

import Form from './Form/Form'
import Search from './Search/Search'
import Groups from './Groups/Groups'

import './RSVP.scss'

const RSVP = () => {
   const dispatch = useDispatch()
   const history = useHistory()
   const { group, groups } = useSelector(state => state)

   return (
      <div className='rsvp'>
         {groups ? (
            <button
               className='rsvp__back button button--white text-secondary'
               onClick={group ? () => dispatch(clearGroup()) : () => dispatch(clearGroups())}>
               Back
            </button>
         ) : (
            <button className='rsvp__back button button--white text-secondary' onClick={() => history.push('/')}>
               Home
            </button>
         )}
         {group ? <Form /> : groups ? <Groups /> : <Search />}
      </div>
   )
}

export default RSVP
