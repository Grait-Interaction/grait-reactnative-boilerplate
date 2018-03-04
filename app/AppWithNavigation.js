import React, { Component }  from 'react'
import { Text } from 'react-native'
import { createRootNavigator } from './config/router'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const Layout = createRootNavigator()

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const App = () => {
    return (
        <Layout />
    )
}

export default App;
