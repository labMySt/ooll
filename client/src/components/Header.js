import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log("111", this.props.items);
        return (
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                {this.props.items.map((item, index) =>
                    <li class="nav-item">
                        <a className="nav-link"href={item.link} key={index}>{item.label}</a>
                    </li>
                )}
            </ul>
        );
    }
}

export default Header;
