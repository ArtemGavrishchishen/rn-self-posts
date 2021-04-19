import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text> AboutScreen</Text>
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

export default AboutScreen
