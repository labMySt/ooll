import React, { Component } from 'react';

class Header extends Component {
    render() {

        console.log("111", this.props.items);
        return (
            <div className="App">

                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        );
    }
}

export default Header;