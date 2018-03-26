import React from 'react'
import '../styles/allforsite.css';
import img from "../static/allforsite/1920_003.png"

class AllForSite extends React.Component{
    render(){
        return(
            <div className="allforsite row">
                <div className="col-lg-6 allforsite-text">
                    <hr />
                    <p>Все необхідне для створення вашого сайту</p>
                    <p>З нами вам нема про що турбуватися. Безкошто- вні сайти,інтуїти</p>
                    <p>Створити чудовий сайт тепер ще простіше.Без  програмування. Про</p>
                </div>
                <div className="col-lg-6 allforsite-img">
                    <img src={img}/>

                </div>
            </div>
        )
    }
}

export default AllForSite