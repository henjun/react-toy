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

    return class extends Component {
        state = {
            visible: true
        }

        onMouseEnter(){
            this.setState({
                visible: false
            });
        }

        onMouseLeave(){
            this.setState({
                visible: true
            });
        }
        render(){
            return this.props.waterMark ? (
                <div
                    onMouseLeave={e => this.onMouseLeave(e)}
                >
                    <div 
                        onMouseEnter={e => this.onMouseEnter(e)}
                        className={waterMarkCss} style={{display: this.state.visible? 'block': 'none'}}>{WrappedComponent.name}</div>
                    <WrappedComponent {...this.props} />
                </div>
            ) : (
                <WrappedComponent {...this.props} />
            )
        }
    }
}
export default withWaterMark;