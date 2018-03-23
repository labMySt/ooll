import React from 'react'
import '../styles/footer.css';
import facebook from "../static/footer/facebook.png"
import linkedin from "../static/footer/linkedin.png"
import twitter from "../static/footer/twitter.png"
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    render(){
       return(
        <footer id="myFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <span className="logo"> Schoolla </span>
                    <p className="rights"> © 2017 </p>
                </div>
                <div className="col-sm-3">
                    <ul>
                        <li className="footer-links"><a href="#">Шаблони</a></li>
                        <li className="footer-links"><a href="#">Допомога</a></li>
                        <li className="footer-links"><a href="#">Контакти</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>
                        <li className="footer-info"><p href="#">(063) 222 34 35</p></li>
                        <li className="footer-info"><p href="#">(063) 222 34 35</p></li>
                        <li className="footer-info"><p href="#">SchoollaWeb@gmail.cim</p></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>
                        <li><p href="#">Соціальні мережі</p></li>
                            <div className="footer-icons">
                                <a href="#"><img src={facebook}/></a>
                                <a href="#"><img src={twitter}/></a>
                                <a href="#"><img src={linkedin}/></a>
                            </div>    
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        )
      }
};


export default Footer