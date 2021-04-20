import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native'

import THEME from '../theme'
import { DATA } from '../data'

const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const post = DATA.find(p => p.id === postId)

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите уделить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        { text: 'Удадить', style: 'destructive', onPress: () => {} },
      ],
      { cancelable: false }
    )
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')
  return { headerTitle: 'Пост от ' + new Date(date).toLocaleDateString() }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
})

export default PostScreen
