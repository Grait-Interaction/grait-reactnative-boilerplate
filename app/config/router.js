import { StackNavigator, TabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, Alert } from 'react-native'

import { TabBar } from '../components/TabBar'
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Splash from '../screens/Splash'

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            title: "Welcome",
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Sign In",
        }
    }
},
{
    initialRouteName: "Welcome",
})

export const SignedIn = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            // tabBarIcon: null
        }
    },
    Middle: {
        screen: ()=>(<Text style={{marginTop: 120}}>Content</Text>),
        navigationOptions: {
            tabBarLabel: "Middle",
            // tabBarIcon: null
        }
    },
    Other: {
        screen: ()=>(<Text style={{marginTop: 120}}>This is another tab</Text>),
        navigationOptions: {
            tabBarLabel: "Other",
            // tabBarIcon: null
        }
    },
},
{
    /**
     * If you want to use a custom tabBar component this is a great
     * starting point
     */
    // tabBarComponent: TabBar,

    tabBarOptions: {
        style: {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }
    }
})

export const createRootNavigator = () => {
    return StackNavigator({
        SignedIn: {
            screen: SignedIn,
            navigationOptions: {
                gesturesEnabled: false
            }
        },
        SignedOut: {
            screen: SignedOut,
            navigationOptions: {
                gesturesEnabled: false
            }
        },
        Splash: {
            screen: Splash,
            navigationOptions: {
                gesturesEnabled: false
            }
        }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'Splash'
    })
}