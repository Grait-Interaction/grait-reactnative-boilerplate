import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import immutableTransform from 'redux-persist-transform-immutable'

// Import reducers
import test from './test'
import user from './user'

const config = {
    transforms: [immutableTransform()],
    key: 'root',
    storage: storage,
    // blacklist: ['user'],
    // whitelist: ['user', 'eagles'], // Uncomment to use whitelist
}

// Paste reducers to be included in the store here
export default persistCombineReducers(config, {
    test: test,
    // user: user, // Uncomment to use user reducer
})
