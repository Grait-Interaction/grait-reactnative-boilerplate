import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../../../resources/themes/wireframe'
import { styles } from './styles'

const primaryColor = COLORS.primary

const SplashLoader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Splash loader</Text>
            <ActivityIndicator color="#fff" size="large" />
        </View>
    )
};

SplashLoader.propTypes = {
    children: PropTypes.any
};

export default SplashLoader;
