import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

// Import reducers to prepare store
import reducers from '../reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
    // middlewares.push(logger)
}

// Add middlewares to redux store
middlewares.push(thunk)
middlewares.push(promiseMiddleware())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
)
const persistor = persistStore(store)

/**
 * You can purge the store at any time by just uncomment this line
 */
// persistor.purge()

export {store, persistor}
