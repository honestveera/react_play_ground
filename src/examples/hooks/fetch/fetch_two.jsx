import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchTwo() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromClick, setIdFromClick] = useState(1)

    const handleClick = () => {
        setIdFromClick(id) 
    }


    useEffect(() => {
         fetch(`https://jsonplaceholder.cypress.io/todos/${idFromClick}`)
           .then(res => res.json())
           .then(json =>{ 
            setPost(json)
           })
    }, [idFromClick])

    return (
        <div>
           <input type='text' value={id} onChange={e => setId(e.target.value)}/>
           <button onClick={handleClick}>Fetch</button>
           <div>{post.title}</div>
        </div>
    );
}

export default FetchTwo;