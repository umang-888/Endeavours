import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chat from './components/Chat/Chat';
import IncubeteeRegister from './components/Login/Incubetee_signup';
import IncubeteeLogin from './components/Login/Incubetee_signin';
import Incubetee from './components/Login/Incubetee_login';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Todo from './components/Todo/Todo';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/incubetee" exact component={Incubetee} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/about" exact component={About} />
            <Route path="/todo" exact component={Todo} />
            <Route path="/log_incubetee" exact component={IncubeteeLogin} />
            <Route path="/reg_incubetee" exact component={IncubeteeRegister} />
            <Route path="/chat" exact component={Chat} />
        </Router>
    )
}

export default App;