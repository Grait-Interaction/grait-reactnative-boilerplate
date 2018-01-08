# Grait React Native Boilerplate
> A simple to use boilerplate for React Native that we use at Grait Interaction
for our production line of React Native applications. It's a full featured
boilerplate with redux, redux-persist and reactnavigation integrated, working
out-of-the-box.

### Features
This boilerplate includes the following external packages preconfigured with
the application.

- Redux
- Redux Persist
- React Navigation
- Immutable
- Axios
- Redux Promise Middleware

### Configuration
##### How to rename the boilerplate
You can change the name attribute in package.json, remove the ios and android folder and then run react-native upgrade,
and just let react add the android/ios files. You need to change this line in index.js
```
AppRegistry.registerComponent('GRNB', () => App);
```
Change GRNB to whatever you call you app.
