import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root'; //new test setup
import App from './App';

//- remove service worker to get it out of code coverage
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Root> 
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
