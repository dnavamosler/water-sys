// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App'


// Container
import Home from './containers/home/home'
import HomeAdmin from './components/home-admin/homeAdmin'
import Panel from './components/Panel/Panel'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/admin" component={ HomeAdmin } />
            <Route exact path="/home" component={ Panel } />
            
        </Switch>
    </App>

export default AppRoutes