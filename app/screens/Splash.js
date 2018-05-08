import React, { Component } from 'react';
import { StatusBar, Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios'
import PropTypes from 'prop-types';
import { SplashLoader } from '../components/SplashLoader'

class Splash extends Component {

    static propTypes = {
        navigation: PropTypes.object
    };

    componentDidMount() {

        if (this.props.user && this.props.user.token) {
            axios.defaults.headers['Authorization'] = 'Bearer '+this.props.user.token
        }else {
            setTimeout(()=>{
                this.props.navigation.navigate('SignedOut')
            }, 500);
        }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content" />
                <SplashLoader />
            </View>
        )
    }
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Splash);
