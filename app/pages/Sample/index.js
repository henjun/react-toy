import React, { Component } from 'react';
import { render } from 'react-dom';
import Sample from '../../containers/Sample';
import store from '../../containers/Sample/store';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <Sample />
    </Provider>,
    document.getElementById("root")
);

if (module.hot){
    module.hot.accept();
}