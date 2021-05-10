import { useState } from 'react';

function useCounter(intialCount = 0 , value) {
  const [count, setCount] = useState(intialCount)

  const increment = () => {
    setCount(prevcount => prevcount + value)
  }

  const decrement = () => {
    setCount(prevcount => prevcount - value)
  }

  const reset = () => {
    setCount(0)
  }

  return [count, increment, decrement, reset]
}

export default useCounter;