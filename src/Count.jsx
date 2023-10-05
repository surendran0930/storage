import React, { useState } from 'react'


function Count() {
    const [plus,setPlus]=useState(0)
    function add(){
        setPlus(prevPlus => prevPlus +1)
       
    }
    function sub(){
        setPlus(plus-1)
       
    }
  return (
    <div>
        <h1>{plus}</h1>
        <button onClick={add}>add</button>
        <button onClick={sub}>sub</button>
    </div>
  )
}

export default Count