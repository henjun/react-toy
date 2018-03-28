import { createStore, compose } from 'redux';
import { browserHistory } from 'react-router';
import reducer from './reducer';

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
                    /**/ typeof window === 'object' &&
                    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                        shouldHotReload: false,
                    })
                    : compose;
                    
const store = createStore(
    reducer,
    composeEnhancers(),
    browserHistory
);

export default store;