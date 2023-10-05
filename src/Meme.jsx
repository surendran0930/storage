import React, { useState } from 'react'
import memesData from './MemsData'

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return (
        <div>
            <main action="" className='section_main'>
                <div className='input_main'>
                    <div>
                        <input type="text" className='inputs'  placeholder='Shut up'/>
                    </div>
                    <div>
                        <input type="text" className='inputs'  placeholder='and take my money'/>
                    </div>
                </div>
                <div >
                    <button  className='button' onClick={getMemeImage}>Get a new meme image 🖼</button>
                </div>
                <img src={memeImage} alt="img" className='mems'/>
            </main>
            {/* <h1>{value}</h1> */}
        </div>
    
    )
}

export default Meme