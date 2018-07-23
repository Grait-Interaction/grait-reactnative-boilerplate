import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// Import reducers
// import test from './test'

const config = {
    // transforms: [],
    key: 'root',
    storage: storage,
    // blacklist: ['user'],
    // whitelist: ['user', 'eagles'], // Uncomment to use whitelist
}

// Paste reducers to be included in the store here
export default persistCombineReducers(config, {
    // test: test,
})