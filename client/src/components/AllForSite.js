import React from 'react'
import '../styles/allforsite.css';
import img from "../static/allforsite/1920_003.png"

class AllForSite extends React.Component{
    render(){
        return(
            <div className="allforsite row">
                <div className="allforsite-block row">
                    <div className="col-lg-6 col-sm-6 allforsite-text">
                        <hr />
                        <h1>Все необхідне для створення вашого сайту</h1>
                        <p>З нами вам нема про що турбуватися. Безкошто- вні сайти,інтуїтивний
                            веб-конструктор, стильні шаблони, красиві галереї, мобільна оптимізація,
                            величезна коллекція зображень, надійний хостинг, цілодобова служба
                            підтримки - все це в єдинії платформи для створення сайтів</p>
                        <p>Створити чудовий сайт тепер ще простіше.Без  програмування.
                            Просто виберіть шаблон, змініть в ньому будь-який елемент
                            за бажанням, додайте свої тексти, фото, відео - і сайт готовий</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 allforsite-img">
                        <img src={img}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default AllForSite
