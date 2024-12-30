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
import AppHeader from 'components/header'
import MainBlock from 'components/main'
import MethodBlock from 'components/method'
import OtherBlock from 'components/other'
import PurposeBlock from 'components/purpose'
import { useStyles } from 'hooks'
import React from 'react'
import { ScrollView } from 'react-native'
import R from 'res'

import stylesConfig from './MainScreen.styles'

type MainScreenProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MainScreen = ({}: MainScreenProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <>
      <AppHeader />
      <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false} bounces={false} showsVerticalScrollIndicator={false}>
        <MainBlock />
        <MethodBlock />
        <PurposeBlock />
        <OtherBlock />
      </ScrollView>
    </>
  )
}

export default MainScreen
