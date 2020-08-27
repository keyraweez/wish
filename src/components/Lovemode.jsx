import React from 'react';
import Navbar from './Navbar'
import {Route, BrowserRouter, Router} from 'react-router-dom';


let Lovemode = () =>{
    let addWish = () =>{
        let friendPage = [
            'Обнимашки', "Играть одной рукой", " Поцелуй в щёчку", "Выложить историю с победителем, отметить его и написать 'обожаю его/её' ", 
            " Всю игру общаешься на английском", "Рассказываешь секрет", "Рассказываешь самую стыдную историю из своей жизни", 
            "Пишешь классному руководителю, что его любишь", "одной рукой 20 раз набить мяч, если не смог/ла - поцелуй в щёчку", "Угощаешь чем-нибудь", 
            "На протяжении 10 минут, вместо слов ты мяукаешь", "Тебе повезло, никакого желания нет", "Тебе повезло! Загадай действие любому игроку. Все, что придет на ум.",
            "Покажи любой фокус", 'Выдавал/ла чужие тайны/секреты другим людям?', 'Какие безумные поступки совершал/ла?', 'Расскажи смешной анекдот или историю, произошедшую с тобой.',
            
        ]
        let finallywish = Math.floor(Math.random() * friendPage.length);
        console.log( friendPage[finallywish]);
        let newWish = document.getElementById('wish')
        newWish.innerHTML = friendPage[finallywish];
        }
    return(
          <div className='main-wish-block'>
                <h1 className='title-mode'>Love mode <br/> Приятной игры! </h1>
                <div className='wish-block'><h1 className='wishsss' id='wish'></h1>
            </div>
            <div>
                <button className='wish-button' onClick={ addWish }>Загадать желание</button>
            </div>
        </div>
    )
}

export default Lovemode;
