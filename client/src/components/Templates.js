import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import '../styles/templates.css';
import img from '../static/hhh.png';

class Templates extends Component {
    state = {links: [],
             templates: []};

    componentDidMount() {
        fetch('/templates_menu')
            .then(res => res.json())
            .then(links => this.setState({ links }));
        fetch('/templates')
            .then(res => res.json())
            .then(templates => this.setState({ templates }));
    }
    render() {
        return (
            <div>
                <Header />
                <div className="content-templates">
                    <hr />
                    <h5>Шаблони</h5>
                    <ul className="hor_nav">
                        {this.state.links.map((item, index) =>
                            <li className="nav-item">
                                <Link className="template-link" to={item.link} key={index}>{item.label}</Link>
                            </li>
                        )}
                    </ul>

                    <div className="row templates-table">
                        {this.state.templates.map((item, index) =>
                            <div className="col-lg-3 col-sm-6">
                                <div className="template">
                                    <img src={item.img} />
                                    <Link className="template-link" to={item.link} key={index}>{item.label}</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Templates