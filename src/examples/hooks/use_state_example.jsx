import React, { useState } from "react";

function UseStateExample() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  const incrementFive = () => {
    for(let i=0;i<5;i++){
      setCount(prevCoun => prevCoun + 1)
    }
  }

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default UseStateExample;
