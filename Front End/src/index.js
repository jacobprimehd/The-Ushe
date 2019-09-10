import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from "./pages/Home/Home";


const Root = () => (
    <Router>
    <Route exact path="/" component={Home} />
    </Router>
)


ReactDOM.render(<Root/>, document.getElementById('root'));
