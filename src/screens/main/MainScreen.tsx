/**
 * -----------------------------------------------------------------------
 *  Header      : MainScreen.tsx
 *  Created     : 27.12.2024
 *  Modified    : 27.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React from 'react'
import { View } from 'react-native'
import R from 'res'

import stylesConfig from './MainScreen.styles'

type MainScreenProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MainScreen = ({}: MainScreenProps) => {
  const styles = useStyles(stylesConfig)

  return <></>
}

export default MainScreen
