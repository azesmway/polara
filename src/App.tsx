import AppHeader from 'components/header'
import MainBlock from 'components/main'
import React from 'react'
import { Dimensions, View } from 'react-native'

const App = () => {
  return (
    <View style={{ width: Dimensions.get('window').width, backgroundColor: '#061A43' }}>
      <AppHeader />
      <MainBlock />
    </View>
  )
}

export default App
