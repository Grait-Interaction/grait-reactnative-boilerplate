import React, { PureComponent } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, Modal, Image } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../../../resources/themes/wireframe'
import { styles } from './styles'

const primaryColor = COLORS.primary

class TabBar extends PureComponent{

    constructor(props){
        super(props)

        this.state = {
            openModal: false,
            fadeModalBG: new Animated.Value(0),
        }
    }

    _openModal = ()=>{
        this.setState({openModal: true});
        Animated.timing(this.state.fadeModalBG, {toValue: 1, duration: 500, delay: 240}).start()
    }

    _closeModal = ()=>{
        Animated.timing(this.state.fadeModalBG, {toValue: 0, duration: 240}).start(()=>{
            this.setState({openModal: false})
        })
    }

    _renderMiddleButton = (index)=>{
        return(
            <TouchableWithoutFeedback key={index} onPress={this._openModal}>
                <View style={styles.middleButton}>
                    <Text>ICON</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    _renderTabButton = (scene, title)=>{
        return(
            <View style={[styles.tabButton, scene.focused?styles.focused:null]}>
            </View>
        )
    }

    _renderMiddleModal = ()=>{
        return(
            <Modal visible={this.state.openModal} animationType="slide" transparent={true}>
                <TouchableWithoutFeedback onPress={this._closeModal}>
                    <Animated.View style={{backgroundColor: '#0006', flex: 1, opacity: this.state.fadeModalBG}}></Animated.View>
                </TouchableWithoutFeedback>
                <View style={styles.modal}>

                    <View style={{alignItems: 'center', marginTop: -42}}>
                        <View style={[styles.middleButton, {width: 84, height: 84, backgroundColor: '#fff', borderRadius: 42, shadowOpacity: 0}]}></View>
                    </View>

                </View>
            </Modal>
        )
    }

    render() {

        // Fetch and prepare useful props
        const {
            position,
            navigation,
            jumpTo,
            getOnPress,
            getTestIDProps,
            isLandscape,
            getLabelText,
            getParams
        } = this.props

        // Routes to be rendered
        const { routes } = navigation.state;
        const previousScene = routes[navigation.state.index];

        return (
            <Animated.View style={styles.tabbar}>

                {routes.map((route, index) => {

                    const focused = index === navigation.state.index
                    const scene = { route, index, focused }

                    if (route.key == 'Plus') {
                        return this._renderPlusButton(index)
                    }

                    return (
                        <TouchableWithoutFeedback
                            key={route.key}
                            // testID={testID}
                            // accessibilityLabel={accessibilityLabel}
                            onPress={() => (jumpTo(scene.route.key))}>
                            {this._renderTabButton(scene, getLabelText(scene))}
                        </TouchableWithoutFeedback>
                    )
                })}

                {this._renderMiddleModal()}

            </Animated.View>
        )
    }
};

TabBar.propTypes = {
    children: PropTypes.any
};

export default TabBar;
