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
            <div>
                <Header items={this.state.users} />
            </div>
        );
    }
}

export default App;