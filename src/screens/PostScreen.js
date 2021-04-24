import React, { useEffect, useCallback } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AppHeaderIcon from '../components/AppHeaderIcon'
import THEME from '../theme'
import { DATA } from '../data'
import { toggleBooked } from '../store/actions/post'

const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const post = DATA.find(p => p.id === postId)

  const dispatch = useDispatch()

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(postId))
  }, [dispatch, postId])

  useEffect(() => {
    navigation.setParams({ toggleHandler })
  }, [toggleHandler])

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

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
  const booked = navigation.getParam('booked')
  const toggleHandler = navigation.getParam('toggleHandler')

  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    ),
  }
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
