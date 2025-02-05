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

// import AppButton from 'components/ui/button'
import { useStyles } from 'hooks'
import React, { useMemo } from 'react'
import { isMobile, useMobileOrientation } from 'react-device-detect'
// @ts-ignore
import MovingText from 'react-moving-text'
import { Text, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'
import { WIDTH_DESKTOP } from 'res/const'

// import { setBlocksY } from 'store/data'
import stylesConfig from './MainBlock.styles'

type MainBlockProps = {
  scrollRef: any
}

const T = R.lang

const MainBlock = ({ scrollRef }: MainBlockProps) => {
  const styles = useStyles(stylesConfig)
  const { isPortrait } = useMobileOrientation()
  const { width } = useWindowDimensions()

  // {!isMobile ? (
  //               <>
  //                 <MovingText type="popIn" duration="2000ms" delay="1s" direction="normal" timing="ease-in" iteration="1" fillMode="backwards">
  //                   <View style={{ marginTop: 60, width: '100%', alignItems: 'center' }}>
  //                     <AppButton
  //                       type={'white'}
  //                       title={'Приобрести курс'}
  //                       press={() => {
  //                         if (scrollRef && scrollRef.current) {
  //                           // @ts-ignore
  //                           scrollRef.current?.scrollTo({
  //                             y: blocksY.method,
  //                             animated: true
  //                           })
  //                         }
  //                       }}
  //                     />
  //                   </View>
  //                 </MovingText>
  //                 <View style={{ marginTop: 74, width: '100%' }} />
  //               </>
  //             ) : (
  //               <>
  //                 {/*<View style={{ height: s(60) }} />*/}
  //                 <View style={{ width: '100%', marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
  //                   <AppButton
  //                     type={'white'}
  //                     title={'Приобрести курс'}
  //                     press={() => {
  //                       if (scrollRef && scrollRef.current) {
  //                         // @ts-ignore
  //                         scrollRef.current?.scrollTo({
  //                           y: blocksY.method,
  //                           animated: true
  //                         })
  //                       }
  //                     }}
  //                   />
  //                   <View style={{ height: s(10) }} />
  //                   {/*<AppButton*/}
  //                   {/*  type={'transparent'}*/}
  //                   {/*  title={'Подробнее о методе'}*/}
  //                   {/*  press={() =>*/}
  //                   {/*    // @ts-ignore*/}
  //                   {/*    (document.location.href = '#method')*/}
  //                   {/*  }*/}
  //                   {/*/>*/}
  //                 </View>
  //                 <View style={{ width: '100%', marginTop: 40 }} />
  //               </>
  //             )}

  const OnePage = () => {
    return (
      <View style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center' }}>
        <View
          // @ts-ignore
          style={{ width: width > WIDTH_DESKTOP ? WIDTH_DESKTOP : width }}>
          <View
            // @ts-ignore
            style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
            <View style={{ marginTop: 50, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              {/*<Image source={LogoCenter} style={{ width: 220, height: 220 }} /> id="rotate-rect"*/}
              <View style={{ position: 'absolute', top: 22 }}>
                <img id="rotate-img-3" src="images/bg.svg" width="71" height="188" alt="" />
              </View>
              <View style={{ position: 'absolute', top: 30 }}>
                <img id="rotate-img-2" src="images/down.svg" width="170" height="170" alt="" />
              </View>
              <View style={{ position: 'absolute', top: 15 }}>
                <img id="rotate-img-1" src="images/up.svg" width="200" height="200" alt="" />
              </View>
            </View>
            <View style={{ width: '100%', marginTop: isMobile ? 280 : 280, alignItems: 'center', justifyContent: 'center' }}>
              <MovingText type="flipFromTop" duration="3000ms" delay="0s" direction="normal" timing="ease" iteration="1" fillMode="none">
                <View style={{ width: '100%' }}>
                  <Text style={[styles.title, { fontSize: isMobile && isPortrait ? s(24) : isMobile && !isPortrait ? 42 : 48 }]}>{'Метод самопознания Полара'}</Text>
                </View>
              </MovingText>
              <MovingText type="slideInFromBottom" duration="3000ms" delay="0s" direction="normal" timing="ease" iteration="1" fillMode="none">
                <View style={{ width: '100%' }}>
                  <Text style={[styles.subtitle, { fontSize: isMobile && isPortrait ? s(16) : isMobile && !isPortrait ? 26 : 26 }]}>{'Сакральная нумерология'}</Text>
                </View>
              </MovingText>
            </View>
            <View style={{ width: '100%', marginTop: 80 }} />
          </View>
        </View>
      </View>
    )
  }

  return useMemo(() => <OnePage />, [width, isPortrait])
}

export default MainBlock
