import React from 'react';
import withWaterMark from '../withWaterMark';

function Header(props){
    return (
        <div>
        Header
        {props.children}
        </div>
    );
}

export default withWaterMark(Header);