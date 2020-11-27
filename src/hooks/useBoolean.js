import { useState } from 'react'

export const useBoolean = initValue => {
   const [value, setValue] = useState(initValue)

   const setToTrue = () => setValue(true)
   const setToFalse = () => setValue(false)

   return [value, setToTrue, setToFalse]
}
