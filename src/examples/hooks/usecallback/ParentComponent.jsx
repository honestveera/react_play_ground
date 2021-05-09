import React, { useState, useCallback } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {
    console.log("usecallback Parent Component")

    const [age, setAge] = useState(10);
    const [salary, setSalary] = useState(10000);
   
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1)
    }, [salary])

    return (
        <div>
            <Title/>
            <Count count={age}/>
            <Button handleClick={incrementAge}> Increment Age </Button>
            <Count count={salary}/>
            <Button handleClick={incrementSalary}> Increment Salary </Button>
        </div>
    );
}

export default React.memo(ParentComponent);