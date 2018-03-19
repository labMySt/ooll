import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    state = {users: []};

    componentDidMount() {
        fetch('/header_menu')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-right header">
                <a className="navbar-brand logo" href="/">OOLL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav header">

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