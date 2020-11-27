import _ from 'lodash'
import {
   CLEAR_GROUPS,
   SET_GROUPS,
   CLEAR_GROUP,
   SET_GROUP,
   UPDATE_ATTENDING,
   ADD_DIETARY_RESTRICTION,
   REMOVE_DIETARY_RESTRICTION,
   UPDATE_DIETARY_NOTES,
   UPDATE_SONG,
   PREV_GUEST,
   NEXT_GUEST,
   SET_SONGS,
   CLEAR_SONGS,
   CLEAR_RSVP,
} from './types'

const initialState = {
   groups: null,
   group: null,
   guestIndex: 0,
   songs: null,
}

export default function (state = initialState, action) {
   let updatedGroup

   switch (action.type) {
      case CLEAR_GROUPS:
         return initialState

      case SET_GROUPS:
         return {
            ...state,
            groups: action.groups,
         }

      case CLEAR_GROUP:
         return {
            ...state,
            group: null,
            guestIndex: 0,
         }

      case SET_GROUP:
         let group = state.groups.find(group => group.id === action.groupId)

         return {
            ...state,
            group,
         }

      case PREV_GUEST:
         return {
            ...state,
            guestIndex: state.guestIndex - 1,
         }

      case NEXT_GUEST:
         return {
            ...state,
            guestIndex: state.guestIndex + 1,
         }

      case UPDATE_ATTENDING:
         updatedGroup = _.cloneDeep(state.group)
         updatedGroup.guests[state.guestIndex].attending = action.attending
         return {
            ...state,
            group: updatedGroup,
         }

      case ADD_DIETARY_RESTRICTION:
         updatedGroup = _.cloneDeep(state.group)
         updatedGroup.guests[state.guestIndex].dietary_restrictions.push(action.restriction)
         return {
            ...state,
            group: updatedGroup,
         }

      case REMOVE_DIETARY_RESTRICTION:
         updatedGroup = _.cloneDeep(state.group)
         updatedGroup.guests[state.guestIndex].dietary_restrictions = updatedGroup.guests[
            state.guestIndex
         ].dietary_restrictions.filter(restriction => restriction !== action.restriction)
         return {
            ...state,
            group: updatedGroup,
         }

      case UPDATE_DIETARY_NOTES:
         updatedGroup = _.cloneDeep(state.group)
         updatedGroup.guests[state.guestIndex].dietary_notes = action.dietaryNotes
         return {
            ...state,
            group: updatedGroup,
         }

      case UPDATE_SONG:
         updatedGroup = _.cloneDeep(state.group)
         updatedGroup.guests[state.guestIndex].song = action.song
         return {
            ...state,
            group: updatedGroup,
            songs: null,
         }

      case SET_SONGS:
         return {
            ...state,
            songs: action.songs,
         }

      case CLEAR_SONGS:
         return {
            ...state,
            songs: null,
         }

      case CLEAR_RSVP:
         return initialState

      default:
         return state
   }
}
