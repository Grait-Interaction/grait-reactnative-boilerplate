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
    }
})

class Home extends Component {

    render() {

        const { navigate } = this.props.navigation

        return (
            <MainContainer>
                <StatusBar barStyle="default" />

                <View style={styles.container}>
                    <Text>This is Home screen with a tab navigator</Text>
                    <Text onPress={() => { navigate('Login') }}>Sign out</Text>
                </View>

            </MainContainer>
        )
    }
};

export default Home