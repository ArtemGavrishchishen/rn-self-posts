import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types'

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
  [REMOVE_POST]: (state, payload) => {
    return {
      ...state,
      allPosts: state.allPosts.filter(p => p.id !== payload),
      bookedPosts: state.bookedPosts.filter(p => p.id !== payload),
    }
  },
  [ADD_POST]: (state, payload) => {
    return {
      ...state,
      allPosts: [{ ...payload }, ...state.allPosts],
    }
  },
  DEFAULT: state => state,
}

export const postReducers = (state = initialState, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
