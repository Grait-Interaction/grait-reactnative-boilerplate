import React from 'react'
import { SafeAreaView } from 'react-native'

const MainContainer = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', bottom: 'always' }}>
            {children}
        </SafeAreaView>
    )
}

export default MainContainer