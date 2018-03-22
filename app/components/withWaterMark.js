import React, { Component } from 'react';
import { style } from 'typestyle';

function withWaterMark(WrappedComponent){
    const waterMarkCss = style({
        position: "absolute",
        opacity: "0.25",
        width: "100%",
        textAlign: "center",
        zIndex: "1000",
        background: '#ccc'
    });

    return function(props){
        return (
            <div>
                <div className={waterMarkCss}>{WrappedComponent.name}</div>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default withWaterMark;