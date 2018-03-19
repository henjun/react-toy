import React, { Component } from 'react';
import {  
    NavLink as Link 
} from 'react-router-dom';

export default () => (
    <React.Fragment>
        <Link key={1} activeClassName="selected" to="/">Hello</Link>
        <Link key={2} to="/hello">Hello</Link>
        <Link key={3} to="/world">World</Link>
    </React.Fragment>
);
    