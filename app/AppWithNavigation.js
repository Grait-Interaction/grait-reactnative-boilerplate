import React from 'react'
import { createRootNavigator } from './config/router'

const Layout = createRootNavigator()

const App = () => {
    return (
        <Layout />
    )
}

export default App;
