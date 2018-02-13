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

### How to use this boilerplate

1. Clone or download this repo.
2. Put content inside your own repo. Make sure you copy hidden files as well
3. Remove ios/ and android/ folders
4. Open package.json and name field from GRNB to your project name
5. open index.js and change app name GRNB to same name as in 4.
6. run ```yarn install``` or ```npm install``` depending on your choice.
7. run ```react-native upgrade``` to reinstall ios/ and android/ folders with the new project name

### Folder Structure

#### app/
This is where all React Native Javascript code goes. Inside this folder you'll find the following structure.

 - **actions/**

    Place for redux actions
 - **components/**

    Place for components
 - **config/**

    - **api.js**

        Api configuration file, set default urls etc here
    - **router.js**

        Router configuration file
    - **store.js**

        Redux store configuration file
 - **modules/**

    Place for modules
 - **reducers/**

    Place for Redux reducers
 - **screens/**

    In this folder you place all your different screens that the app consists of.
    The screens you define in router.js
 - **AppWithNavigation.js**

    Only change if you need
 - **index.js**

    Only change if you need

#### resources/
External resources, We've put theme template files here

### Other nice packages to grab

- [Material tabbar](https://github.com/timomeh/react-native-material-bottom-navigation)
- [Moment](https://www.npmjs.com/package/moment)
- [Interactable](https://github.com/wix/react-native-interactable)
- [React Native Camera](https://github.com/react-native-community/react-native-camera)
- [React Native Icons](https://github.com/oblador/react-native-vector-icons)

tbc
