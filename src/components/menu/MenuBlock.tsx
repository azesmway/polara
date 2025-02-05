/**
 * -----------------------------------------------------------------------
 *  Header      : MenuBlock.tsx
 *  Created     : 30.12.2024
 *  Modified    : 30.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import AppHeader from 'components/header'
import { BlurView } from 'expo-blur'
import { useStyles } from 'hooks'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import R from 'res'
import { RootState } from 'store'
import { setShowMenu } from 'store/data'

import stylesConfig from './MenuBlock.styles'

type MenuBlockProps = {
  scrollView: any
  scrollRef: any
}

const T = R.lang
const MENU_HEIGHT = 10

const MenuBlock = ({ scrollRef, scrollView }: MenuBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const blocksY = useSelector((state: RootState) => state.app.blocksY)
  const showMenu = useSelector((state: RootState) => state.app.showMenu)

  return (
    <Modal visible={showMenu} transparent={true}>
      <BlurView intensity={40} tint={'dark'} style={{ flex: 1 }}>
        <View>
          <AppHeader scrollView={scrollView} scrollRef={scrollRef} />
          <View style={{ marginTop: isMobile ? s(60) : s(30), alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))

                setTimeout(() => {
                  // scrollView(blocksY.about)
                  // @ts-ignore
                  window.location.href = window.location.origin + '/#about'
                }, 100)
              }}>
              <Text style={styles.menu}>{'О Методе'}</Text>
            </TouchableOpacity>
            <View style={{ height: s(MENU_HEIGHT) }} />
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))

                setTimeout(() => {
                  // scrollView(blocksY.method)
                  // @ts-ignore
                  window.location.href = window.location.origin + '/#purpose'
                }, 100)
              }}>
              <Text style={styles.menu}>{'Курсы'}</Text>
            </TouchableOpacity>
            <View style={{ height: s(MENU_HEIGHT) }} />
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))

                setTimeout(() => {
                  // scrollView(blocksY.other)
                  // @ts-ignore
                  window.location.href = window.location.origin + '/#other'
                }, 100)
              }}>
              <Text style={styles.menu}>{'Дополнительные курсы'}</Text>
            </TouchableOpacity>
            <View style={{ height: s(MENU_HEIGHT) }} />
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))

                setTimeout(() => {
                  // scrollView(blocksY.master)
                  // @ts-ignore
                  window.location.href = window.location.origin + '/#master'
                }, 100)
              }}>
              <Text style={styles.menu}>{'Мастер классы'}</Text>
            </TouchableOpacity>
            <View style={{ height: s(MENU_HEIGHT) }} />
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))

                setTimeout(() => {
                  // scrollView(blocksY.contact)
                  // @ts-ignore
                  window.location.href = window.location.origin + '/#contact'
                }, 100)
              }}>
              <Text style={styles.menu}>{'Контакты'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  )
}

export default MenuBlock
