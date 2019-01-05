// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App'


// Container
import Home from './containers/home/home'
import Agenda from './containers/agenda/agenda'


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/agenda" component={ Agenda} />
            <Route component={ Home } />
            
        </Switch>
    </App>

export default AppRoutes