// import React, { Component } from 'react';
// import '../index.css';
// import Home from "./Home";
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Home />
//             </div>
//
//         );
//     }
// }
// export default App;

import React from 'react';
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";



const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

export default App;
