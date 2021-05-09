import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevcount => prevcount + 1)
  }

  const decrement = () => {
    setCount(prevcount => prevcount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return [count, increment, decrement, reset]
}

export default useCounter;