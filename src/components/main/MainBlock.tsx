/**
 * -----------------------------------------------------------------------
 *  Header      : MainBlock.tsx
 *  Created     : 27.12.2024
 *  Modified    : 27.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import AppButton from 'components/ui/button'
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, Linking, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'

import stylesConfig from './MainBlock.styles'

type MainBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MainBlock = ({}: MainBlockProps) => {
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

  const OnePage = ({ startY, endY, location1, location2, location3 }: any) => {
    return (
      <LinearGradient
        start={{ x: 0.0, y: startY }}
        end={{ x: 1.0, y: endY }}
        locations={[location1, location2, location3]}
        colors={['#061A43', 'rgba(28,47,79,1)', 'rgba(36,60,87,1)']}
        // @ts-ignore
        style={styles.gradient}>
        <View
          // @ts-ignore
          style={styles.mainView}>
          <View
            // @ts-ignore
            style={styles.mainViewInSide}>
            <View style={{ width: '100%', height: 240, alignItems: 'center', justifyContent: 'center' }}>
              {/*<Image source={LogoCenter} style={{ width: 220, height: 220 }} /> id="rotate-rect"*/}
              <View style={{ position: 'absolute', top: 22, marginLeft: 5 }}>
                <img id="rotate-img-3" src="images/bg.svg" width="71" height="188" />
              </View>
              <View style={{ position: 'absolute', top: 30 }}>
                <img id="rotate-img-2" src="images/down.svg" width="170" height="170" />
              </View>
              <View style={{ position: 'absolute', top: 15 }}>
                <img id="rotate-img-1" src="images/up.svg" width="200" height="200" />
              </View>
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.title}>{'Метод самопознания Полара'}</Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
              <iframe
                width={screenSize.width < 540 ? screenSize.width - 40 : 720}
                height={screenSize.width < 540 ? screenSize.height / 4 : 405}
                src="https://rutube.ru/play/embed/60364b4ac2cdef561c0cb3bfa5ddf26a/"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                // @ts-ignore
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen
              />
            </View>
            <View style={{ height: s(60) }} />
            {/*<View style={{ width: '100%', alignItems: 'center' }}>*/}
            {/*  <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center' }}>{'ПРОЕКТ НАХОДИТСЯ\nВ РАЗРАБОТКЕ!'}</Text>*/}
            {/*</View>*/}
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <AppButton
                type={'gradient'}
                title={'Приобрести курс'}
                press={() =>
                  // @ts-ignore
                  (document.location.href = '#methodPay')
                }
              />
              <View style={{ height: s(10) }} />
              <AppButton
                type={'transparent'}
                title={'Подробнее о методе'}
                press={() =>
                  // @ts-ignore
                  (document.location.href = '#method')
                }
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    )
  }

  if (screenSize.width < 540) {
    return <OnePage startY={1.0} endY={0.0} location1={0.2} location2={0.9} location3={1.0} />
  }

  return <OnePage startY={0.8} endY={0.3} location1={0.6} location2={0.9} location3={0.99} />
}

export default MainBlock
