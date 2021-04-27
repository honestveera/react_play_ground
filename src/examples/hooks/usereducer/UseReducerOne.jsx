import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

// UserReducer is a hook that is used for State Manangement
// Array reduce and react reducer both have similarities
// syntax: useReducer(reducer_function, initialState)
function UseReducerOne(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count {count}</div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    );
}

export default UseReducerOne;