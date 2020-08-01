import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import PortfolioView from './components/Portfolio';
import Login from './containers/Admin/login';
import Auth from './hoc/auth';
import User from './components/Admin';
import AddWork from './containers/Admin/add';
import UserWorks from './components/Admin/userWorks';
import EditWork from './containers/Admin/edit';
import Register from './containers/Admin/register';
import Logout from './components/Admin/logout';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/work/:id" exact component={Auth(PortfolioView, null)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path='/user/add-work' exact component={Auth(AddWork, true)} />
                <Route path='/user/edit-post/:id' exact component={Auth(EditWork, true)} />
                <Route path="/signin" exact component={Auth(Login, false)} />
                <Route path="/user/works" exact component={Auth(UserWorks, true)} />
                <Route path="/user/signout" exact component={Auth(Logout, true)} />
                <Route path='/user/signup' exact component={Auth(Register, false)} />
            </Switch>
        </Layout>
    );
};

export default Routes;