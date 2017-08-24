import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Index from './page/index';
import Add from './page/create/add';
import Edit from './page/create/edit';
import Copy from './page/create/copy';

const RouterPage = () => (
    <Router>
        <div>
            <Route exact path="/" component={Index}/>
            <Route path="/add" component={Add}/>
            <Route path="/update/:name" component={Edit}/>
            <Route path="/copy/:name" component={Copy}/>
        </div>
    </Router>)

export default RouterPage;
