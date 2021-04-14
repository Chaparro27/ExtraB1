import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

const PrivateRoute = ({
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
                    : adminUser === false 
                    ? <Component { ...props } />
                    : <Redirect to="/dashboard" /> 
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute
