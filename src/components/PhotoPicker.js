import React, { useState } from 'react'
import { View, StyleSheet, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

async function askForCameraPermissions() {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Ошибака', 'Вы не дали прав на создание фото')
      return false
    }
    return true
  }
}

const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)

  const takePhoto = async () => {
    const hasPermissions = await askForCameraPermissions()
    if (!hasPermissions) {
      return
    }
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    })
    setImage(img.uri)
    onPick(img.uri)
  }

  return (
    <View style={styles.wrapper}>
      <Button title="Сделaть фото" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
})

export default PhotoPicker
