import React, { Component }  from 'react'
import { Text } from 'react-native'
import { createRootNavigator } from './config/router'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

const Layout = createRootNavigator()

const App = () => {
    return (
        <Layout />
    )
}

export default App;
