import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import './sass/main.scss'
import "bootstrap/dist/css/bootstrap.css";

import {rootReducer} from "./redux/reducer/rootReducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
));



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


