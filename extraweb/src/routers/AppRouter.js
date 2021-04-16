import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie';


import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Nav from '../helpers/nav';
import NavAdmin from '../helpers/navAdmin';
import Admin from '../components/Admin';
import Login from '../components/Login';

const AppRouter = () => {
    
    const [cookies] = useCookies(['c_user'])

    return (
        <Router>
            <Switch>
                <AdminPrivateRoute 
                    path="/dashboard" 
                    component={ NavAdmin }
                    isAuthenticated={ cookies.c_user === undefined ? false : cookies.c_user.isLogged }
                    adminUser={ cookies.c_user === undefined ? false : cookies.c_user.isadmin }
                    />
                <PublicRoute 
                    path="/auth" 
                    component={ Login } 
                    isAuthenticated={ cookies.c_user === undefined ? false : cookies.c_user.isLogged }
                    adminUser={ cookies.c_user === undefined ? false : cookies.c_user.isadmin }
                    /> 
                <PrivateRoute 
                    path="/" 
                    component={Nav }
                    isAuthenticated={ cookies.c_user === undefined ? true : cookies.c_user.isLogged }
                    adminUser={ cookies.c_user === undefined ? true : cookies.c_user.isadmin }
                    />
                
            </Switch>
        </Router>
    )
}

export default withCookies(AppRouter);
