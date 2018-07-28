import React from 'react'
import { SafeAreaView } from 'react-native'

const MainContainer = ({ children, style }) => {
    return (
        <SafeAreaView style={[{flex: 1}, style ? style : null]} forceInset={{ top: 'always', bottom: 'always' }}>
            {children}
        </SafeAreaView>
    )
}

export default MainContainer