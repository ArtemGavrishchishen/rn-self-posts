import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MainScreen = () => {
  return (
    <View style={styles.center}>
      <Text> MainScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MainScreen
