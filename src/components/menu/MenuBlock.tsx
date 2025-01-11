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
import { BlurView } from 'expo-blur'
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { setShowMenu } from 'store/data'

// import Modal from 'react-native-modal'
import stylesConfig from './MenuBlock.styles'

type MenuBlockProps = {
  showMenu: boolean
}

const T = R.lang
const MENU_HEIGHT = 30

const MenuBlock = ({ showMenu }: MenuBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })

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

  const AppLogo = () => {
    return (
      <View
        style={{
          width: 111,
          height: 90,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgb(48,64,96)'
        }}>
        <svg id="a" width="70" height="70" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476 476">
          <path
            /* eslint-disable-next-line max-len */
            d="M238,468.8c-61.65,0-119.61-24.01-163.2-67.6S7.2,299.65,7.2,238,31.21,118.39,74.8,74.8,176.35,7.2,238,7.2s119.61,24.01,163.2,67.6,67.6,101.55,67.6,163.2-24.01,119.61-67.6,163.2-101.55,67.6-163.2,67.6ZM238,8.8c-61.22,0-118.78,23.84-162.07,67.13S8.8,176.78,8.8,238s23.84,118.78,67.13,162.07c43.29,43.29,100.85,67.13,162.07,67.13s118.78-23.84,162.07-67.13c43.29-43.29,67.13-100.85,67.13-162.07s-23.84-118.78-67.13-162.07C356.78,32.64,299.22,8.8,238,8.8Z"
            fill="#fff"
            stroke-width="0"
          />
          <path
            /* eslint-disable-next-line max-len */
            d="M238,438.8c-110.72,0-200.8-90.08-200.8-200.8S127.28,37.2,238,37.2s200.8,90.08,200.8,200.8-90.08,200.8-200.8,200.8ZM238,38.8c-109.84,0-199.2,89.36-199.2,199.2s89.36,199.2,199.2,199.2,199.2-89.36,199.2-199.2S347.84,38.8,238,38.8Z"
            fill="#fff"
            stroke-width="0"
          />
          <path d="M238,349.75l-87.96-171.75.19-.36L238,6.25l87.96,171.75-.19.36-87.77,171.39ZM151.84,178l86.16,168.25,86.16-168.25L238,9.75l-86.16,168.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,319.75l-72.6-141.75.19-.36L238,36.25l72.6,141.75-.19.36-72.41,141.39ZM167.2,178l70.8,138.25,70.8-138.25L238,39.75l-70.8,138.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,289.75l-57.23-111.75.19-.36,57.05-111.39,57.23,111.75-.19.36-57.05,111.39ZM182.57,178l55.43,108.25,55.44-108.25-55.44-108.25-55.43,108.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,409.75l-57.23-111.75.19-.36,57.05-111.39,57.23,111.75-57.23,111.75ZM182.57,298l55.43,108.25,55.44-108.25-55.44-108.25-55.43,108.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,382.39l-73.94-144.39,73.94-144.39,73.94,144.39-73.94,144.39ZM168.55,238l69.45,135.61,69.45-135.61-69.45-135.61-69.45,135.61Z" fill="#fff" stroke-width="0" />
          <path d="M238,469.75l-87.96-171.75.19-.36,87.77-171.39,87.96,171.75-87.96,171.75ZM151.84,298l86.16,168.25,86.16-168.25-86.16-168.25-86.16,168.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,439.75l-72.6-141.75.19-.36,72.41-141.39,72.6,141.75-72.6,141.75ZM167.2,298l70.8,138.25,70.8-138.25-70.8-138.25-70.8,138.25Z" fill="#fff" stroke-width="0" />
          <polygon points="227.76 238 238 218 248.24 238 238 258 227.76 238" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="8" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="468" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="158" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="318" r="8" fill="#fff" stroke-width="0" />
          <circle cx="75.37" cy="75.37" r="8" fill="#fff" stroke-width="0" />
          <circle cx="400.63" cy="400.63" r="8" fill="#fff" stroke-width="0" />
          <circle cx="8" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="468" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="75.37" cy="400.63" r="8" fill="#fff" stroke-width="0" />
          <circle cx="400.63" cy="75.37" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="38" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="438" r="8" fill="#fff" stroke-width="0" />
          <circle cx="64.79" cy="138" r="8" fill="#fff" stroke-width="0" />
          <circle cx="411.21" cy="338" r="8" fill="#fff" stroke-width="0" />
          <circle cx="64.79" cy="338" r="8" fill="#fff" stroke-width="0" />
          <circle cx="411.21" cy="138" r="8" fill="#fff" stroke-width="0" />
          <circle cx="138" cy="64.79" r="8" fill="#fff" stroke-width="0" />
          <circle cx="338" cy="411.21" r="8" fill="#fff" stroke-width="0" />
          <circle cx="38" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="438" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="138" cy="411.21" r="8" fill="#fff" stroke-width="0" />
          <circle cx="338" cy="64.79" r="8" fill="#fff" stroke-width="0" />
        </svg>
      </View>
    )
  }

  const AppTitle = ({ widthTitle, heightTitle }: any) => {
    return (
      <View
        style={{
          width: 210,
          height: 90,
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgb(48,64,96)'
        }}>
        <div
          style={{
            color: '#F6F6F6',
            fontSize: s(16),
            fontFamily: 'KreadonRegular',
            fontWeight: '400',
            textTransform: 'uppercase',
            wordWrap: 'break-word'
          }}>
          Авторский Метод <br />
          Евгении Кошкиной
        </div>
      </View>
    )
  }

  const AppMenu = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 90,
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingRight: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgb(48,64,96)'
        }}>
        <TouchableOpacity onPress={() => dispatch(setShowMenu(!showMenu))}>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              /* eslint-disable-next-line max-len */
              d="M6.15398 6.15374C6.31219 5.99573 6.52664 5.90698 6.75023 5.90698C6.97383 5.90698 7.18828 5.99573 7.34648 6.15374L20.8465 19.6537C20.9294 19.731 20.9959 19.8241 21.042 19.9276C21.0881 20.0311 21.1129 20.1429 21.1149 20.2562C21.1169 20.3694 21.0961 20.482 21.0536 20.587C21.0112 20.6921 20.948 20.7875 20.8679 20.8677C20.7878 20.9478 20.6923 21.0109 20.5873 21.0534C20.4822 21.0958 20.3697 21.1167 20.2564 21.1147C20.1431 21.1127 20.0314 21.0879 19.9279 21.0417C19.8244 20.9956 19.7312 20.9291 19.654 20.8462L6.15398 7.34624C5.99598 7.18804 5.90723 6.97358 5.90723 6.74999C5.90723 6.5264 5.99598 6.31194 6.15398 6.15374Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              /* eslint-disable-next-line max-len */
              d="M20.8467 6.15374C21.0047 6.31194 21.0934 6.5264 21.0934 6.74999C21.0934 6.97358 21.0047 7.18804 20.8467 7.34624L7.34669 20.8462C7.18674 20.9953 6.97519 21.0764 6.7566 21.0726C6.53801 21.0687 6.32945 20.9802 6.17486 20.8256C6.02027 20.671 5.93172 20.4624 5.92787 20.2438C5.92401 20.0252 6.00515 19.8137 6.15419 19.6537L19.6542 6.15374C19.8124 5.99573 20.0268 5.90698 20.2504 5.90698C20.474 5.90698 20.6885 5.99573 20.8467 6.15374Z"
              fill="white"
            />
          </svg>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Modal visible={showMenu} transparent={true}>
      <BlurView intensity={40} tint={'dark'} style={{ flex: 1 }}>
        <View>
          <View
            style={{
              width: Dimensions.get('window').width,
              height: 90,
              flexDirection: 'row'
            }}>
            <AppLogo />
            <AppTitle widthTitle={172} heightTitle={40} />
            <AppMenu />
          </View>
          <View style={{ marginTop: s(60), alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))
                setTimeout(() => {
                  // @ts-ignore
                  document.location.href = '#method'
                }, 100)
              }}>
              <Text style={styles.menu}>{'О методе'}</Text>
            </TouchableOpacity>
            <View style={{ height: s(MENU_HEIGHT) }} />
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))
                setTimeout(() => {
                  // @ts-ignore
                  document.location.href = '#courses'
                }, 100)
              }}>
              <Text style={styles.menu}>{'Курсы'}</Text>
            </TouchableOpacity>
            <View style={{ height: s(MENU_HEIGHT) }} />
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMenu(!showMenu))
                setTimeout(() => {
                  // @ts-ignore
                  document.location.href = '#master'
                }, 100)
              }}>
              <Text style={styles.menu}>{'Мастер классы'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  )
}

export default MenuBlock
