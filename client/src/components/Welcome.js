import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = () => (
    <div className="content welcome">
        <h1>Добро пожаловать на OOLL</h1>
        <p>Давайте создадим вам сайт уже сегодня</p>
        <Link className="link bi cta" id="mainCta" to="/sign_up" fold-name="1" target="_top">Создать мой сайт</Link>
    </div>
);

export default Welcome;