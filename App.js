import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'
import { LogBox } from 'react-native'

import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'
import store from './src/store'

LogBox.ignoreLogs([
  'It appears that you are using old version of react-navigation library',
])

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
