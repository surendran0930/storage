import React, { useState } from 'react'

function Output() {
  const [firValue,setFirValue]=useState("")
  const [secValue,setSecValue]=useState("")
   
 function adding(){
   const varrr=localStorage.setItem(firValue,secValue )
   console.log(varrr);

 }
 function deletes(){
  const del = localStorage.removeItem(firValue)
 }
 function handleChange(e){
  setFirValue(e.target.value)
  // setSecValue(e.target.value)
  console.log(firValue)

 }
 function handleChanging(e){
   setSecValue(e.target.value)
   console.log(secValue)
 }

  return (
    
    <div>
      <form action="">
      <input type="text" value={firValue} onChange={handleChange}placeholder='key'/>
      <input type="text" value={secValue}  onChange={handleChanging} placeholder='value'/>
      <div>
        <button onClick={adding}>ADD</button>
        <button onClick={deletes}>DEL</button>
        <button>UPDATE</button>
        
      </div>
      </form>
    </div>
  )
}

export default Output