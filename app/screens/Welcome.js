import React, { Component } from 'react'
import { StatusBar, Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { ContainerMain } from '../components/Container'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Welcome extends Component {

    static propTypes = {
        navigation: PropTypes.object
    };

    render() {

        const { navigate } = this.props.navigation

        return (
            <ContainerMain>
                <StatusBar barStyle="default" />
                <View style={styles.container}>
                    <Text>This is Welcome screen</Text>
                    <Text onPress={()=>{navigate('Login')}}>Go to Login page</Text>
                </View>
            </ContainerMain>
        )
    }
};

export default connect(null)(Welcome);
