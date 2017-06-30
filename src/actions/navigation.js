import * as types from './types'
import ReactNative from 'react-native'

export function setScreen(state) {
  return {
    type: types.SET_SCREEN,
    state
  }
}
