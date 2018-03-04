import React from 'react';
import { View, SafeAreaView } from 'react-native';

import PropTypes from 'prop-types';

const ContainerMain = ({ children }) => {
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', bottom: 'always' }}>
            {children}
        </SafeAreaView>
    )
};

ContainerMain.propTypes = {
    children: PropTypes.any
};

export default ContainerMain;
