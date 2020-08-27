import React from 'react';
import './About.css';
import {Route, BrowserRouter, Router} from 'react-router-dom';

let Aboutme = () =>{
    return(
        <div className='wrapper'>
            <div className='main-info-block'>
                <div className="contact-logo">
                    <h1>Связь с разработчиком</h1>
                </div>
                <div className="contact-block">
                    <div className='telegram'> 
                        <a href="https://t.me/dimovski5"><img class ='link'
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png" alt="telegram"/></a>
                    </div>
                    <div className='insta'>
                        <a href="https://instagram.com/dimovski__?igshid=g4rq9u6vlhnp"><img class ='link' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;