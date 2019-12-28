import React from 'react'

/* ------------- Native Components ------------- */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainPage from '~/pages/Main'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: { header: null }
  }
},
{
  initialRouteName: 'Main'
})

const Switch = createSwitchNavigator({
    App: AppNavigator
})
  
export default createAppContainer(Switch)