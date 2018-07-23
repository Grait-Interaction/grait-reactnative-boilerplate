import { NavigationActions, StackActions } from 'react-navigation'

let _navigator

export const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef
}

export const navigate = (routeName, params) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
}

export const resetTo = (routeName) => {
    _navigator.dispatch(StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: routeName })],
    }))
}