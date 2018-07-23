import React from 'react'
import { createRootNavigator } from './config/router'
import { setTopLevelNavigator } from './utils/NavigationServices'

const Layout = createRootNavigator()

const App = () => {
    return (
        <Layout ref={navigatorRef => { setTopLevelNavigator(navigatorRef) }} />
    )
}

export default App