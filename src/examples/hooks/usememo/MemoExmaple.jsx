import React, { useState, useMemo } from 'react';

function MemoExample() {
    console.log("UseMemo")

    const [countOne, setCounterOne] = useState(0);
    const [countTwo, setCounterTwo] = useState(10);
   
    const incrementCounterOne = () => {
        setCounterOne(countOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
      let i = 0;
      while(i<1000000000) i++;
      return countOne % 2
    }, [countOne])

    return (
        <div>
            
            <button onClick={incrementCounterOne}> Counter One </button> 
            {countOne}
            {isEven ? 'EVEN' : 'ODD'} 
            <button onClick={incrementCounterTwo}> Counter Two </button> 
            {countTwo}
        </div>
    );
}

export default MemoExample;