import { useState } from 'react'

export const useInput = (initValue, lengthLimit) => {
   const [value, setValue] = useState(initValue)
   const [error, setError] = useState('')

   const reset = () => {
      setValue(initValue)
      setError('')
   }

   const bind = {
      value: value,
      onChange: e => {
         // If there is a limit then trim off extra characters
         if (lengthLimit && e.target.value.length > lengthLimit) setValue(e.target.value.substring(0, lengthLimit))
         else setValue(e.target.value)
      },
      onFocus: () => {
         // Removes error text when the field is focused
         setError('')
      },
      onBlur: e => {
         // Trim whitespace from beginning and end of input
         setValue(e.target.value.trim())
      },
   }

   return [value, bind, error, setError, reset, setValue]
}
