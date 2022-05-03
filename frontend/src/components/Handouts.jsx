import React, { useEffect } from 'react'
import axios from 'axios'


export default function Handouts() {
    useEffect(() =>{
        axios.get('localhost:4000')
        .then(res => res.data)
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        <h1>handouts</h1>
    </div>
  )
}
