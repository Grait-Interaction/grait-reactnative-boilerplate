import React, { Component }  from 'react'
import { Text } from 'react-native'
import { createRootNavigator } from './config/router'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

const Layout = createRootNavigator()

const App = ({ dispatch, nav }) =>  {
    return (
        <Layout
            navigation={addNavigationHelpers({
                dispatch,
                state: nav
            })}
        />
    )
}


const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(App);
