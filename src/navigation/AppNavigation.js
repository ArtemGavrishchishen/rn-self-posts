import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import MainScreen from '../screens/MainScreen'
import PostScreen from '../screens/PostScreen'
import BookedScreen from '../screens/BookedScreen'
import THEME from '../theme'

const PostNavigation = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#FFF',
      },
      headerTintColor: Platform.OS === 'android' ? '#FFF' : THEME.MAIN_COLOR,
    },
  }
)

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  {
    initialRouteName: 'Booked',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#FFF',
      },
      headerTintColor: Platform.OS === 'android' ? '#FFF' : THEME.MAIN_COLOR,
    },
  }
)

const BottomNavigator = createBottomTabNavigator(
  {
    Post: {
      screen: PostNavigation,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        ),
      },
    },
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-star" size={25} color={info.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    },
  }
)

export const AppNavigation = createAppContainer(BottomNavigator)
