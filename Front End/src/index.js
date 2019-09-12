import React from 'react';
import './style.css'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Profile from './pages/profile/Profile'


const Root = () => (
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Redirect to="/" />
    </Switch>
    </Router>
)


ReactDOM.render(<Root/>, document.getElementById('root'));
