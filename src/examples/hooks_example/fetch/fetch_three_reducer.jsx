import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const intialState = {
    loading: true,
    error: '',
    post: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, error: '', post: action.payload }
        case 'FETCH_ERROR':
            return { loading: false, error: 'Something went wrong', post: {} }
        default:
            return state
    }
}

function FetchReducer() {
    const [state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.cypress.io/posts/1`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'LOADING...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default FetchReducer;