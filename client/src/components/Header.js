import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    state = {users: []};

    componentDidMount() {
        fetch('/heater_menu')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-right">
                <a className="navbar-brand" href="/">OOLL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        {this.state.users.map((item, index) =>
                            <li className={item.class} key={index}>
                                <Link className="nav-link" to={item.link} key={index}>{item.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Header;
