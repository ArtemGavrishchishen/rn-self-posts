import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { LogBox } from 'react-native'

import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'

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
  return <AppNavigation />
}
