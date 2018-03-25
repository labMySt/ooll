import React from 'react'
import '../styles/populartemplates.css';
import pr1 from "../static/populartemplates/pr1.jpg"
import pr2 from "../static/populartemplates/pr2.jpg"
import pr3 from "../static/populartemplates/pr3.jpg"
import { Link } from 'react-router-dom';

class PopularTemplates extends React.Component{
    render(){
        return(
            <div className="populartemplates">
                <div className="populartemplates-top">
                     <p>_____</p>
                     <p>Популярні  шаблони</p>
                </div>

                <div className="populartemplates-slider">
                    <div className="block"><img src={pr1}/></div>
                    <div className="block"><img src={pr2}/></div>
                    <div className="block"><img src={pr3}/></div>
                </div>

                <div className="populartemplates-button">
                     <Link className="link-choose-all" to="/templates">Всі шаблони</Link>
                </div>

            </div>
        )
    }
}



export default PopularTemplates
