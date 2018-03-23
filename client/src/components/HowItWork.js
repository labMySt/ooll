import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/howitwork.css';
import bl1 from "../static/howitwork/bl1.png"
import bl2 from "../static/howitwork/bl2.png"
import bl3 from "../static/howitwork/bl3.png"
import bl4 from "../static/howitwork/bl4.png"
import bl5 from "../static/howitwork/bl5.png"
import bl6 from "../static/howitwork/bl6.png"

class HowItWork extends React.Component{
    render(){
       return(
        <div className="howitwork">
            <div className="howitwork-top">
                <p>_____</p>
                <p>Як це працює?</p>
            </div>

            <div className="howitwork-tutorial">
                <div className="bl-tutor"><img src={bl1}/></div>
                <div className="bl-tutor"><img src={bl2}/> </div>
                <div className="bl-tutor"><img src={bl3}/></div>
                <div className="bl-tutor"><img src={bl4}/></div>
                <div className="bl-tutor"><img src={bl5}/></div>
                <div className="bl-tutor"><img src={bl6}/></div>
            </div>

            <div className="howitwork-tutorial">
                <div className="b2-tutor">Зареєструйтесь на сайті</div>
                <div className="b2-tutor">Перейдіть на пошту, активуйте аккаунт</div>
                <div className="b2-tutor">Виберіть шаблон</div>
                <div className="b2-tutor">Додайте логотип</div>
                <div className="b2-tutor">Відредагуйте шаблон</div>
                <div className="b2-tutor">Сайт готовий</div>
            </div>

            <div className="populartemplates-button">

            </div>
        </div>
       )
      }
};


export default HowItWork