import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../../components/base/Header';
import Contents from '../../components/base/Contents';
import Footer from '../../components/base/Footer';
import store from './store';

const Home = () => <h2>Home</h2>;
const Hello = () => <h2>Hello</h2>;
const World = () => <h2>World</h2>;

function Main() {
    return (
        <Provider store={store}>
            <React.Fragment>
                <Header waterMark={true}>
                    <Link to="/">Home</Link>
                    <Link to="/hello">Hello</Link>
                    <Link to="/world">World</Link>
                </Header>
                <Contents>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/hello" component={Hello} />
                    <Route path="/world" component={World} />
                </Contents>
                <Footer />
            </React.Fragment>
        </Provider>
    );
}

export default Main;

                