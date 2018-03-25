import React, { Component } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import logo from '../static/logo.png';

class Header extends Component {
    state = {links: []};

    componentDidMount() {
        fetch('/header_menu')
            .then(res => res.json())
            .then(links => this.setState({ links }));
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-right header">

                <div className="logo" >
                    <a className="navbar-brand" href="/" title="ooll">
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav row header-links">

                        {this.state.links.map((item, index) =>
                            <li className={item.class} key={index}>
                                <Link className="header-link" to={item.link} key={index}>{item.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
