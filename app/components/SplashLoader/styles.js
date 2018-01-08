import { StyleSheet } from 'react-native';
import { COLORS } from '../../../resources/themes/wireframe'

const primaryColor = COLORS.primary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 18
    }
})

export { styles }
