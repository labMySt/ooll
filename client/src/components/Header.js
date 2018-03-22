import React, { Component } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import logo from '../static/logo.png';

var flag = 1;

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {     links: [],
                  isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

    componentDidMount() {
        fetch('/header_menu')
            .then(res => res.json())
            .then(links => this.setState({ links: links }));
    }

    render() {

    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <li onClick={this.handleLogoutClick}><Link className="header-link col-lg-3" to="">Вихід</Link></li>;
    } else
      button = <li onClick={this.handleLoginClick}><Link className="header-link  col-lg-3" to="">Вхід</Link></li>;


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
                        {button}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
