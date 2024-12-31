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
import MenuBlock from 'components/menu'
import MethodBlock from 'components/method'
import ModalBlock from 'components/modal'
import OtherBlock from 'components/other'
import PurposeBlock from 'components/purpose'
import { useStyles } from 'hooks'
import React, {useState} from 'react'
import { ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'
import R from 'res'
import { RootState } from 'store'

import stylesConfig from './MainScreen.styles'
import {s} from "react-native-size-matters";

type MainScreenProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MainScreen = ({}: MainScreenProps) => {
  const styles = useStyles(stylesConfig)
  const showMenu = useSelector((state: RootState) => state.app.showMenu)
  const modalFullPay = useSelector((state: RootState) => state.app.modalFullPay)
  const [collapsed, setCollapsed] = useState(true)
  const PURPOSE_HEIGHT = collapsed ? 660 : 2536

  return (
    <>
      {showMenu ? <></> : <AppHeader />}
      <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false} bounces={false} showsVerticalScrollIndicator={false}>
        <MainBlock />
        <MethodBlock />
        <View style={{ height: s(PURPOSE_HEIGHT) }}>
          <PurposeBlock setCollapsed={setCollapsed} collapsed={collapsed} />
        </View>
        <OtherBlock />
      </ScrollView>
      {showMenu && <MenuBlock showMenu={showMenu} />}
      {modalFullPay && <ModalBlock modalFullPay={modalFullPay} />}
    </>
  )
}

export default MainScreen
