import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Handouts() {
    const [handouts, setHandouts] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:4000/handout')
        .then(res => setHandouts(res.data))
        .catch(err => console.log(err))
    },[handouts])
  return (
    <div>
        <h1>handouts</h1>
        {handouts.map(handout => (
            <div className="">
            <p><span>handout name</span>: {handout.courseName}</p>
            </div>
        ))}
    </div>
  )
}

