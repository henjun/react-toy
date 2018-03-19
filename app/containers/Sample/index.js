import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom';
import { connect } from 'react-redux';  

import { toggleCheck } from './actions';
import Nav from '../../components/route/Nav';

import InputText from '../../components/InputText';
import InputFormat from '../../components/InputFormat';

const Home = () => <h2>Home</h2>;
const Hello = () => <h2>Hello</h2>;
const World = () => <h2>World</h2>;

function Sample(props){
    return (
        <React.Fragment>
            <div>is Checked: { props.checked ? 'ok': 'no'}</div>
            <input value={ props.checked } type="checkbox" onClick={  props.toggleCheck } checked={ props.checked }/>
            <InputFormat />
            <Router>
                <React.Fragment>
                    <Nav/>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/hello" component={Hello} />
                    <Route path="/world" component={World} />
                </React.Fragment>
            </Router>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {  
    return {
        checked: state.get('checked')
    }
}

const mapDispatchToProps = (dispatch) => {  
    return {
        toggleCheck: (e) => dispatch(toggleCheck(e.target.checked))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);