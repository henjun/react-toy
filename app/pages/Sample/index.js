// @flow 
import React, { Component } from 'react';
import { render } from 'react-dom';
import Sample from '../../containers/Sample';
import store from '../../containers/Sample/store';
import { Provider } from 'react-redux';

/**
 * @flow/issues/1472
 */

const Root = document.getElementById('root');
if (Root == null) {
    throw new Error("no Root element");
}

render(
    <Provider store={store}>
        <Sample />
    </Provider>,
    Root
);

if (module.hot){
    module.hot.accept();
}