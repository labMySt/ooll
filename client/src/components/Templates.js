import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import img from '../static/hhh.png';

class Templates extends Component {
    state = {links: []};

    componentDidMount() {
        fetch('/templates_menu')
            .then(res => res.json())
            .then(links => this.setState({ links }));
    }
    render() {
        return (
            <div className="templates">
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
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                                <a href="#">Віща школа у Британії</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                            </div>
                        </div>
                    </div>


                    <div className="row templates-table">
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                                <a href="#">Віща школа у Британії</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="template">
                                <img src={img} />
                            </div>
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        );
    }
}

export default Templates