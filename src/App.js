import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Login from "./pages/Login";
import "./sass/order.scss"
import 'react-toastify/dist/ReactToastify.css';

import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";
import {useEffect} from "react";
import {TOKEN_NAME} from "./tools/tools";

function App() {
    useEffect(()=>{
            // localStorage.setItem(TOKEN_NAME, 11111)
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {/*<Route exact path='/' component={Home}/>*/}
                    <Route exact path='/login' component={Login}/>
                    <PrivateRoute exact path='/admin/:url' component={Admin}/>
                    {/*<Route component={NotFound}/>*/}
                </Switch>
            </BrowserRouter>
            <ToastContainer/>
        </div>
    );
}

export default App;
