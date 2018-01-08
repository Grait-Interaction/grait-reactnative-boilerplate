import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

const ContainerMain = ({ children }) => {
    return (
        <View style={{flex: 1}}>
            {children}
        </View>
    )
};

ContainerMain.propTypes = {
    children: PropTypes.any
};

export default ContainerMain;
