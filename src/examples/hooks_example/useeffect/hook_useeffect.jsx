import React, { useState, useEffect } from "react";

function UseEffectExample() {
  // const intialCount = 0;
  // const [count, setCount] = useState(intialCount);
  // const [name, setName] = useState('');

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log('Mouse Position')
    setX(e.clientX)
    setY(e.clientY)
  }

  // Instead of compnentDidMount , componentWillUnmount use useEffect.
  // It will run after every render
  // useEffect(arrowfunction, [conditionalparams]) - Conditional based, we can use useEffect in optimized manner
  useEffect(() => {
    console.log('use Effect: After render')
    window.addEventListener('mouseover', logMousePosition)

    return () => {
      console.log('Unmount Parent Component')
      window.removeEventListener('mouseover', logMousePosition)
    }
  }, [])

  return (
    <div>
      X : {x} Y: {y}
      {/* Count : {count}
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={() => setCount(prevCoun => prevCoun + 1)}>Increment</button>
      <button onClick={() => setCount(prevCoun => prevCoun - 1)}>Decrement</button> */}
    </div>
  );
}

export default UseEffectExample;
