import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CreateScreen = () => {
  return (
    <View style={styles.center}>
      <Text> CreateScreen</Text>
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

export default CreateScreen
