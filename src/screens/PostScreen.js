import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PostScreen = () => {
  return (
    <View style={styles.center}>
      <Text> PostScreen</Text>
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

export default PostScreen
