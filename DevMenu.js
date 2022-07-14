import { DevMenu as ExpoDevMenu } from 'expo-dev-client'
import React from 'react'
import { PanResponder, View } from 'react-native'

export const DevMenu = ({ children }) => {
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (_evt, gestureState) => {
        if (gestureState.numberActiveTouches === 3) {
          ExpoDevMenu.openSettings()
        }
        return false
      },
    }),
  ).current

  const panHandlers = __DEV__ ? panResponder.panHandlers : {}

  return (
    <View pointerEvents="box-none" style={{ flex: 1 }} {...panHandlers}>
      {children}
    </View>
  )
}
