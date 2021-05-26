import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
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
