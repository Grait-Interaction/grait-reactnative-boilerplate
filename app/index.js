import React, { Component }  from 'react'
import { Text } from 'react-native'
import { createRootNavigator } from './config/router'
import { addNavigationHelpers } from 'react-navigation'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './config/store'
import { api } from './config/api'

import AppWithNavigation from './AppWithNavigation'
import { SplashLoader } from './components/SplashLoader'

// Configure api connection
api()

const onBeforeLift = (data) => {
    // This is a function that is called just before the persist gate is lifted
}

export default () => (
    <Provider store={store}>
        <PersistGate
            loading={<SplashLoader />}
            onBeforeLift={onBeforeLift}
            persistor={persistor}>
                <AppWithNavigation />
        </PersistGate>
    </Provider>
);
