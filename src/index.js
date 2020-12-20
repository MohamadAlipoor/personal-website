import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './css/login.css';
import './css/index.css';
import './css/Navbar.css';
import './css/Sidebar.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import 'font-awesome/css/font-awesome.css'
import App from './App';
import Login from './components/Login';
import Dashboard from './components/admin/Dashboard';


ReactDom.render(<BrowserRouter>
    <Switch>
        <Route path='/login' component={Login} />
        <Route path='/admin' render={() => {
            if (localStorage.getItem('token')) return <Dashboard />
            else return <Redirect to='/' />
        }} />
        <Route path='/' component={App} />
    </Switch>
</BrowserRouter>,
    document.getElementById('root'))
