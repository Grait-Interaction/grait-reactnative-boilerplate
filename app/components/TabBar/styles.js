import { StyleSheet } from 'react-native';
import { COLORS } from '../../../resources/themes/wireframe'

const primaryColor = COLORS.primary

const styles = StyleSheet.create({
    tabbar: {
        height: 64,
        backgroundColor: '#999',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#D8D8D8',
        paddingLeft: 20,
        paddingRight: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.17,
        shadowRadius: 4,
    },

    button: {
        backgroundColor: '#C9C9C9',

    },

    focused: {
        backgroundColor: primaryColor,
    },

    middleButton: {
        backgroundColor: '#fff',
        height: 66,
        width: 66,
        marginTop: -7,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#292929',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 13,
    },

    tabButton: {
        backgroundColor: '#C9C9C9',
        height: 24,
        width: 24,
        borderRadius: 12
    },

    modal: {
        backgroundColor: '#fff',
        width: '100%',
        height: 240,
        position: 'absolute',
        bottom: 0,
        padding: 12
    }
})

export { styles }
