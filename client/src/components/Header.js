import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log("111", this.props.items);
        return (
            <ul class="navbar-nav">

                {this.props.items.map((item, index) =>
                    <li class={item.class}>
                        <a className="nav-link"href={item.link} key={index}>{item.label}</a>
                    </li>
                )}
            </ul>
        );
    }
}

export default Header;
