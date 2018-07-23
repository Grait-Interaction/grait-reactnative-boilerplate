import React, { Component } from 'react'
import { StatusBar, Text, StyleSheet, View } from 'react-native'
import { MainContainer } from '../components/MainContainer'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Welcome extends Component {

    render() {

        const { navigate } = this.props.navigation

        return (
            <MainContainer>
                <StatusBar barStyle="default" />
                <View style={styles.container}>
                    <Text>This is Welcome screen</Text>
                    <Text onPress={() => { navigate('Login') }}>Go to Login page</Text>
                </View>
            </MainContainer>
        )
    }
};

export default Welcome