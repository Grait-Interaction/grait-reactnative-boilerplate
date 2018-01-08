import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import immutableTransform from 'redux-persist-transform-immutable'

// Import reducers
import nav from './nav'
import test from './test'

const config = {
    transforms: [immutableTransform()],
    key: 'root',
    storage: storage,
    blacklist: ['nav'],
    // whitelist: ['user', 'eagles'], // Uncomment to use whitelist
}

// Paste reducers to be included in the store here
export default persistCombineReducers(config, {
    nav: nav,
    test: test,
})
