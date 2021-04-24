import { LOAD_POSTS, TOGGLE_BOOKED } from '../types'

const initialState = {
  allPosts: [],
  bookedPosts: [],
}

const handlers = {
  [LOAD_POSTS]: (state, payload) => ({
    ...state,
    allPosts: payload,
    bookedPosts: payload.filter(post => post.booked),
  }),
  [TOGGLE_BOOKED]: (state, payload) => {
    const allPosts = state.allPosts.map(post => {
      if (post.id === payload) {
        post.booked = !post.booked
      }
      return post
    })
    return {
      ...state,
      allPosts,
      bookedPosts: allPosts.filter(post => post.booked),
    }
  },
  DEFAULT: state => state,
}

export const postReducers = (state = initialState, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
