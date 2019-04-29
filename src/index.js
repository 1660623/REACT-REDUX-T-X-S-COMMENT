import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter as Router } from 'react-router-dom'
// import { loginAuth } from './actions/login'

// const token = localStorage.getItem('token')
// const payload = localStorage.getItem('user')
// if(token && token !== undefined && token !== 'undefined '&& payload && payload !== undefined && payload !== 'undefined' ){
//     store.dispatch(loginAuth(token, JSON.parse(payload)))
// }

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
