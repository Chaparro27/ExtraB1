import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';


const AdminPrivateRoute = ({
    isAuthenticated,
    component: Component,
    adminUser,
    ...rest
}) => {

    return (
        <Route { ...rest } 
            component={ ( props ) => (
                ( !isAuthenticated )
                    ? <Redirect to="/auth" /> 
                    : adminUser !== true 
                    ? <Redirect to="/" /> 
                    : <Component { ...props } />
            )}
        />
    )
}

AdminPrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    adminUser: PropTypes.bool.isRequired,
}

export default AdminPrivateRoute;
