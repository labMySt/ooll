import React from 'react';
import Header from "./Header";
import { Link } from 'react-router-dom';
import PopularTemplates from "./PopularTemplates";
import Footer from "./Footer";
import HowItWork from "./HowItWork";
import pc from "../static/pc.png";
import AllForSite from "./AllForSite";
import HaveYouQuestions from "./HaveYouQuestions";
import { connect } from 'react-redux';

class Welcome extends React.Component{
  render(){
    console.log("welcome", this.props);
    return(
      <div className="welcome">
          <Header />
          <div className="row landing">
              <div className="landing-text">
                  <p>Створи свій сайт школи</p>
                  <ul className="btn-landing">
                      <li>
                          <Link className="link-create" to="">Створити</Link>
                      </li>
                      <li>
                          <Link className="link-choose" to="/templates">Вибрати готовий</Link>
                      </li>
                  </ul>

              </div>
              <div className="landing-img"><img src={pc} className="pc"/></div>
          </div>
          <PopularTemplates />
          <HowItWork/>
          <AllForSite/>
          <HaveYouQuestions/>
          <Footer />
      </div>
    )
  }
}

export default Welcome;
