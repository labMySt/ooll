import React from 'react';
import { Link } from 'react-router-dom'

const Main = () => (
    <div className="main">
        <div className="content">
            <h1>Все начинается с&nbsp;великолепного сайта</h1>
            <p>Дизайн и продвинутые технологии OOLL помогут создать сайт вашей мечты. Легко и бесплатно.</p>
            <Link className="link bi cta" id="mainCta" to="/sign_up" fold-name="1" target="_top">Создать сайт</Link>
        </div>
    </div>
);

export default Main;