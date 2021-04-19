import React, { useState } from 'react'
import { Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { bootstrap } from './src/bootstrap'

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
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}
