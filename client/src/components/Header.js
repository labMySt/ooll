import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log("111", this.props.items);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-right">
                <a className="navbar-brand" href="#">OOLL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {this.props.items.map((item, index) =>
                            <li className={item.class}>
                                <a className="nav-link" href={item.link} key={index}>{item.label}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
