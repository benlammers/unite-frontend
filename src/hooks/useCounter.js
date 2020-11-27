import { useState } from 'react'

export const useCounter = (initValue, canBeNegative = false) => {
   const [value, setValue] = useState(initValue)

   const increment = () => {
      setValue(value + 1)
   }

   const decrement = () => {
      setValue((value - 1 < 0) & !canBeNegative ? 0 : value - 1)
   }

   const reset = () => {
      setValue(initValue)
   }

   return [value, increment, decrement, reset]
}
