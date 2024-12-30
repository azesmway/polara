import React from 'react'
import { Dimensions, View } from 'react-native'
import MainScreen from 'screens/main'

const App = () => {
  return (
    <View style={{ width: Dimensions.get('window').width, backgroundColor: '#061A43' }}>
      <MainScreen />
    </View>
  )
}

export default App
