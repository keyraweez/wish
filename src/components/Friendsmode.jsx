import React from 'react';
import './Friends.css'
import {Route, BrowserRouter, Router} from 'react-router-dom';


let Friendsmode = (props) =>{
  
    let addWish = () =>{
        let friendPage = [
                "Завяжите игроку глаза, раскрутите вокруг себя. Затем игрок должен на ощупь найти и угадать любого игрока в комнате.", " Дай каждому сидящему кличку",
                "Прочитай последнее смс в твоем телефоне.", "Тебе повезло! Загадай действие любому игроку. Все, что придет на ум.", "Сделать селфи с 5-ю незнакомыми людьми на улице (или в кафе).",
                "Покажи любой фокус", "Придумай историю со словами «девушка», «кот», «лимон», «чемодан», «штанга».", 'Выдавал\ла чужие тайны/секреты другим людям?', 'Отожмись или присядь 10 раз. Стой на одной ноге минуту.',
                'Чьи мысли из нашей компании ты хотел (а) бы прочитать?', 'Придумай всем присутствующим новые имена, которые больше подходят.', 'Какие безумные поступки совершал\ла?', 
                'Расскажи смешной анекдот или историю, произошедшую с тобой.', 'Вы когда-нибудь засыпали на уроках ?'
            
        ]
        let finallywish = Math.floor(Math.random() * friendPage.length);
        console.log( friendPage[finallywish]);
        let newWish = document.getElementById('wish')
        newWish.innerHTML = friendPage[finallywish];
        }
    return(
        <div className='main-wish-block'>
                <h1 className='title-mode'>Friend mode <br/> Приятной игры! </h1>
                <div className='wish-block'><h2 className='wishsss' id='wish'></h2>
            </div>
            <div>
                <button className='wish-button' onClick={ addWish }>Загадать желание</button>
            </div>
        </div>
    )
}

export default Friendsmode;