import React from 'react'
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
                <hr />
                <p>Як це працює?</p>
            </div>

            <div className="howitwork-tutorial row">
                <div className="bl-tutor col-lg-2">
                    <img src={bl1}/>
                    <p>Зареєструйтесь на сайті</p>
                </div>
                <div className="bl-tutor col-lg-2">
                    <img src={bl2}/>
                    <p>Перейдіть на пошту, активуйте аккаунт</p>
                </div>
                <div className="bl-tutor col-lg-2">
                    <img src={bl3}/>
                    <p>Виберіть шаблон</p>
                </div>
                <div className="bl-tutor col-lg-2">
                    <img src={bl4}/>
                    <p>Додайте логотип</p>
                </div>
                <div className="bl-tutor col-lg-2">
                    <img src={bl5}/>
                    <p>Відредагуйте шаблон</p>
                </div>
                <div className="bl-tutor col-lg-2">
                    <img src={bl6}/>
                    <p>Сайт готовий</p>
                </div>
            </div>
        </div>
       )
      }
};


export default HowItWork