import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AppHeaderIcon from '../components/AppHeaderIcon'
import PostList from '../components/PostList'
import { DATA } from '../data'

const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }

  return (
    <PostList
      data={DATA.filter(post => post.booked)}
      onOpen={openPostHandler}
    />
  )
}

BookedScreen.navigationOptions = {
  headerTitle: 'Избранное',

  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.log('press photo')}
      />
    </HeaderButtons>
  ),
}

export default BookedScreen
