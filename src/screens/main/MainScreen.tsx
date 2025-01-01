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
import FooterBlock from 'components/footer'
import AppHeader from 'components/header'
import MainBlock from 'components/main'
import MasterBlock from 'components/master'
import MenuBlock from 'components/menu'
import MethodBlock from 'components/method'
import ModalBlock from 'components/modal'
import MoreModal from 'components/more'
import OtherBlock from 'components/other'
import PolicyBlock from 'components/policy'
import PurposeBlock from 'components/purpose'
import QuestionBlock from 'components/question'
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useSelector } from 'react-redux'
import R from 'res'
import { RootState } from 'store'

import stylesConfig from './MainScreen.styles'

type MainScreenProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MainScreen = ({}: MainScreenProps) => {
  const styles = useStyles(stylesConfig)
  const showMenu = useSelector((state: RootState) => state.app.showMenu)
  const modalReservation = useSelector((state: RootState) => state.app.modalReservation)
  const modalMaster = useSelector((state: RootState) => state.app.modalMaster)
  const modalMore = useSelector((state: RootState) => state.app.modalMore)
  const [collapsed, setCollapsed] = useState(true)
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })

  const PURPOSE_HEIGHT = collapsed ? 490 : 1562

  const updateDimensions = () => {
    // @ts-ignore
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('resize', updateDimensions)

    // @ts-ignore
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (screenSize.width < 540) {
    return (
      <>
        {showMenu ? <></> : <AppHeader />}
        <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false} bounces={false} showsVerticalScrollIndicator={false}>
          <MainBlock />
          <MethodBlock />
          <View style={{ height: s(PURPOSE_HEIGHT) }}>
            <PurposeBlock setCollapsed={setCollapsed} collapsed={collapsed} />
          </View>
          <OtherBlock modalReservation={modalReservation} />
          <MasterBlock modalMaster={modalMaster} />
          <QuestionBlock />
          <FooterBlock />
          <PolicyBlock />
        </ScrollView>
        {showMenu && <MenuBlock showMenu={showMenu} />}
        {modalReservation && <ModalBlock modalView={modalReservation} modalType={'reservation'} />}
        {modalMaster && <ModalBlock modalView={modalMaster} modalType={'master'} />}
        {modalMore.viewModal && <MoreModal modalView={modalMore.viewModal} modalType={modalMore.typeModal} />}
      </>
    )
  }

  return <></>
}

export default MainScreen
