import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class App extends Component {
    state = {users: []};

    componentDidMount() {
        fetch('/heater_menu')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <Header items={this.state.users} />
        );
    }
}
export default App;