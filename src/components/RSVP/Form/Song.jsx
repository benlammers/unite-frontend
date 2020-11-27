import React from 'react'
import { useDispatch } from 'react-redux'
import { updateSong } from 'redux/actions'

const Song = ({ song, option }) => {
   const dispatch = useDispatch()

   const handleSongSelect = song => {
      dispatch(updateSong(song))
   }

   return (
      <div className={`song ${option ? 'song--option' : ''}`} onClick={option ? () => handleSongSelect(song) : null}>
         <img src={song.image_uri} alt={song.title} />
         <span className='song__title text-secondary'>{song.title}</span>
         <span className='song__artist text-tertiary'>{song.artist}</span>
      </div>
   )
}

export default Song
