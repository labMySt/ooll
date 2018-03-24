import React from 'react';
import Header from "./Header";
import { Link } from 'react-router-dom';
import PopularTemplates from "./PopularTemplates";
import Footer from "./Footer";
import HowItWork from "./HowItWork";

const Welcome = () => (
    <div className="welcome">
        <Header />
        <div className="landing">
            <h1>Створити свій сайт школи</h1>
            <Link className="link-create" to="">Створити</Link>
            <Link className="link-choose" to="/templates">Вибрати готовий</Link>
        </div>
        <PopularTemplates />
        <HowItWork/>
        <Footer />
    </div>
);

export default Welcome;