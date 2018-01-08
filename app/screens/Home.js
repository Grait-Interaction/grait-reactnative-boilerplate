import React, { Component } from 'react';
import { StatusBar, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';

import { ContainerMain } from '../components/Container';

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

    static propTypes = {
        navigation: PropTypes.object
    };

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {

        const { navigate } = this.props.navigation

        return (
            <ContainerMain>
                <StatusBar barStyle="default" />

                <View style={styles.container}>
                    <Text>This is Home screen with a tab navigator</Text>
                    <Text onPress={()=>{navigate('Login')}}>Sign out</Text>
                </View>

            </ContainerMain>
        )
    }
};

export default connect(null)(Home);
