import React from 'react'
import troll from '../assets/Troll Face.png'


function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <div>
                    <img src={troll} alt="troll_img"  className='header_img'/>
                </div>
                <div>
                    <h1>Meme Generator</h1>
                </div>
            </div>
            <div>
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}

export default Header