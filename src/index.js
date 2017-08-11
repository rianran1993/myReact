import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './Detail';
import List from './List';
import Father from './father';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router'
List.props = {
	dss:999999999
};
let routes = 
    <Router>
    <Route path="/testProps" component={Father}></Route>
    <Route path="/" component={List}></Route>
    <Route path="/about/:id" component={Detail}></Route>
    </Router>

ReactDOM.render(<Router routes={routes} history={hashHistory}/>, document.getElementById('root'));
registerServiceWorker();
