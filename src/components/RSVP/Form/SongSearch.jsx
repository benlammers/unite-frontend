import React, { useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSongs, searchSpotify } from 'redux/actions'

import Song from './Song'

const SongSearch = () => {
   const dispatch = useDispatch()
   const { songs } = useSelector(state => state)

   const [query, setQuery] = useState('')

   const handleQuery = event => {
      dispatch(searchSpotify(event.target.value))
      setQuery(event.target.value)
   }

   // Hides list when someone selects off of the list
   useLayoutEffect(() => {
      function handleClickOutside(event) {
         if (!event.target.classList.value.includes('song')) dispatch(clearSongs())
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [dispatch])

   return (
      <div className='song-search'>
         <h3 className='heading-tertiary'>Browse songs</h3>
         <input
            className='song-search__input text-secondary'
            type='text'
            value={query}
            placeholder='Search song'
            onChange={handleQuery}
            onFocus={songs ? null : () => dispatch(searchSpotify(query))}
         />

         <div className='song-search__list'>
            {query && songs && songs.map((song, index) => <Song song={song} key={index} option />)}
         </div>
      </div>
   )
}

export default SongSearch
