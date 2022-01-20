import React from 'react'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        height: 300,
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  )
}
