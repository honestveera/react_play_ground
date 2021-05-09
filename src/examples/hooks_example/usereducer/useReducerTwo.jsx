import React, { useReducer } from 'react';


const intialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return intialState
        default:
            return state

    }
}

function UseReducerTwo() {
    const [count, dispatch] = useReducer(reducer, intialState)

    return (
        <div>
            <div>First Counter: {count.firstCounter}</div>
            <div>Second Counter: {count.secondCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducerTwo;