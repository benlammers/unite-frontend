import React from 'react'

import Attending from './Attending'
import DietaryNotes from './DietaryNotes'
import DietaryRestrictions from './DietaryRestrictions'
import Song from './Song'
import SongSearch from './SongSearch'

const GuestForm = ({ guest }) => {
   let { attending, dietary_notes, dietary_restrictions, name, song } = guest

   return (
      <form className='guest-form'>
         <h2 className='guest-form__name heading-secondary'>{name}</h2>

         <Attending attending={attending} />

         {attending && (
            <>
               <DietaryRestrictions dietary_restrictions={dietary_restrictions} />

               {dietary_restrictions.length > 0 && <DietaryNotes dietary_notes={dietary_notes} />}

               <div className='song-request'>
                  <h3 className='heading-tertiary'>{song ? 'Your Song Request' : 'To Request a Song Search Below'}</h3>
                  {song && <Song song={song} />}
               </div>
               <SongSearch />
            </>
         )}
      </form>
   )
}

export default GuestForm
