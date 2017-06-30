import * as types from './types'
import ReactNative from 'react-native'

export function setPost(state) {
  return {
    type: types.SET_POST,
    state
  }
}
