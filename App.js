import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyDWImR_d1UB-YfIVLoWKDOc4yXwAtjGof4",
  authDomain: "mycarbuddy-7e43a.firebaseapp.com",
  databaseURL: "https://mycarbuddy-7e43a.firebaseio.com",
  projectId: "mycarbuddy-7e43a",
  storageBucket: "mycarbuddy-7e43a.appspot.com",
  messagingSenderId: "239489267010",
  appId: "1:239489267010:web:0437f4bfed9d39d1c304db",
  measurementId: "G-BT32J607BX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const AppStack = createStackNavigator({
  Home:HomeScreen
})
const AuthStack = createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen
})
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App:AppStack,
      Auth:AuthStack
    },
    {
      initialRouteName:"Loading"
    }

  )
)