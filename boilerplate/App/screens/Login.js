import React, { Component } from 'react';
import { StatusBar, Text, StyleSheet, View } from 'react-native';
import { MainContainer } from '../components/MainContainer'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#eee'
    },
})

class Login extends Component {

    render() {

        const { navigate } = this.props.navigation

        return (
            <MainContainer>
                <StatusBar barStyle="default" />

                <View style={styles.container}>
                    <Text>This is Login Screen</Text>
                    <Text onPress={() => { navigate('Home') }}>Sign in</Text>
                </View>
            </MainContainer>
        )
    }
};

export default Login