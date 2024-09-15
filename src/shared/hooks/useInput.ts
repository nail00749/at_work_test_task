import { ChangeEvent, useState } from 'react'

export const useInput = (defaultValue = '') => {
  const [state, setState] = useState(defaultValue)


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }

  const handleClear = () => {
    setState('')
  }

  return {
    value: state,
    onChange: handleChange,
    handleClear
  }
}