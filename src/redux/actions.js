import axiosRequest from 'util/axiosRequest'
import axiosSpotify from 'util/axiosSpotify'
import Cookies from 'js-cookie'

import {
   CLEAR_GROUPS,
   SET_GROUPS,
   CLEAR_GROUP,
   SET_GROUP,
   PREV_GUEST,
   NEXT_GUEST,
   UPDATE_ATTENDING,
   ADD_DIETARY_RESTRICTION,
   REMOVE_DIETARY_RESTRICTION,
   UPDATE_DIETARY_NOTES,
   SET_SONGS,
   CLEAR_SONGS,
   UPDATE_SONG,
   CLEAR_RSVP,
} from './types'

export function setSpotifyToken() {
   axiosRequest
      .get('/api/spotify-token')
      .then(res => {
         Cookies.set('Spotify-Token', res.data.token)
      })
      .catch(err => {
         console.log('Error Getting Spotify Token: ', err)
      })
}

export function clearGroups() {
   return { type: CLEAR_GROUPS }
}

function formatGroups(res) {
   let groups = []
   res.data.forEach(guest => {
      if (typeof guest.dietary_restrictions === 'string') guest.dietary_restrictions = [guest.dietary_restrictions]
      if (!guest.group.rsvp) guest.attending = true
      let groupIndex = groups.findIndex(group => group.id === guest.group.id)
      if (groupIndex === -1) {
         let newGroup = {
            ...guest.group,
            guests: [guest],
         }
         groups = [...groups, newGroup]
      } else {
         groups[groupIndex].guests = [...groups[groupIndex].guests, guest]
      }
   })
   return groups
}

export function searchGroups(name) {
   return dispatch => {
      return new Promise(resolve => {
         axiosRequest
            .get('/api/groups/search', {
               params: { name },
            })
            .then(res => {
               let groups = formatGroups(res)
               let groupFound = groups.length > 0
               dispatch({ type: SET_GROUPS, groups: groupFound ? groups : null })
               resolve(groupFound)
            })
            .catch(err => {
               console.log('Search Error: ', err)
               resolve(false)
            })
      })
   }
}

export function submitGroup(group) {
   return new Promise(resolve => {
      let { guests } = group
      guests = guests.map(guest => {
         if (!guest.attending) {
            return {
               ...guest,
               dietary_notes: '',
               dietary_restrictions: [],
               song: null,
            }
         }
         return guest
      })

      axiosRequest
         .put('/api/groups/update', { guests })
         .then(() => {
            resolve(true)
         })
         .catch(err => {
            console.log(err)
            resolve(false)
         })
   })
}

export function clearGroup() {
   return { type: CLEAR_GROUP }
}

export function setGroup(groupId) {
   return { type: SET_GROUP, groupId }
}

export function prevGuest() {
   return { type: PREV_GUEST }
}

export function nextGuest() {
   return { type: NEXT_GUEST }
}

export function updateAttending(attending) {
   return { type: UPDATE_ATTENDING, attending }
}

export function addDietaryRestriction(restriction) {
   return { type: ADD_DIETARY_RESTRICTION, restriction }
}

export function removeDietaryRestriction(restriction) {
   return { type: REMOVE_DIETARY_RESTRICTION, restriction }
}

export function updateDietaryNotes(dietaryNotes) {
   return { type: UPDATE_DIETARY_NOTES, dietaryNotes }
}

export function updateSong(song) {
   return { type: UPDATE_SONG, song }
}

export function searchSpotify(query) {
   return dispatch => {
      if (!query) dispatch({ type: CLEAR_SONGS })
      else {
         axiosSpotify
            .get('/search', {
               params: {
                  q: query,
                  type: 'track',
                  market: 'US',
                  limit: 5,
               },
            })
            .then(res => {
               let songs = res.data.tracks.items.map(track => {
                  return {
                     artist: track.artists[0].name,
                     title: track.name,
                     image_uri: track.album.images[1].url,
                  }
               })
               dispatch({ type: SET_SONGS, songs })
            })
            .catch(err => {
               // TODO: DISPLAY AN ERROR IF CANT SEARCH SPOTIFY
               console.log('Error Search Spotify: ', err)
            })
      }
   }
}

export function clearSongs() {
   return { type: CLEAR_SONGS }
}

export function clearRsvp() {
   return { type: CLEAR_RSVP }
}
