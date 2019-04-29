// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers/index';

function confiureStore(initialState) {
    let createStoreWithMiddleware;

    // const logger    = createLogger();
    const midleware = applyMiddleware(thunk);

    createStoreWithMiddleware = compose(midleware);

    return createStoreWithMiddleware(createStore)(
        rootReducer, 
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState)
}

const store = confiureStore();

export default store;