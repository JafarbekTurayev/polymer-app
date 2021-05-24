import React from 'react';
import {Route} from 'react-router-dom'
import NotFound from "./NotFound";
import {TOKEN_NAME} from "../tools/tools";

const PrivateRoute = (props) => {
    return (
        localStorage.getItem(TOKEN_NAME) ?
            <Route component={props.component} path={props.path} exact={props.exact}/>
            : <Route component={NotFound}/>
        // : <Redirect to="/login"/>
    );
};

export default PrivateRoute;