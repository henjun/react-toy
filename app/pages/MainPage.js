// @flow 
import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from '../containers/Main';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = document.getElementById('root');
if (Root == null) {
    throw new Error("no Root element");
}

import store from '../containers/Main/store';

render(
    <Router>
        <Main />
    </Router>,
    Root
);

if (module.hot){
    module.hot.accept();
}