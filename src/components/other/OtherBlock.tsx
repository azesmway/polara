/**
 * -----------------------------------------------------------------------
 *  Header      : OtherBlock.tsx
 *  Created     : 30.12.2024
 *  Modified    : 30.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import AppButton from 'components/ui/button'
import { useStyles } from 'hooks'
import React, { useEffect, useMemo, useState } from 'react'
import { isMobile, useMobileOrientation } from 'react-device-detect'
import { Dimensions, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import R from 'res'
import { RootState, store } from 'store'
import { setBlocksY, setModalMore, setModalReservation } from 'store/data'

import stylesConfig from './OtherBlock.styles'

type OtherBlockProps = {
  collapsed: boolean
}

const T = R.lang

const OtherBlock = ({ collapsed }: OtherBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const [widthBlock, setWidthBlock] = useState(0)
  const modalReservation = useSelector((state: RootState) => state.app.modalReservation)
  const modalMaster = useSelector((state: RootState) => state.app.modalMaster)
  const modalMore = useSelector((state: RootState) => state.app.modalMore)

  const { isPortrait, isLandscape } = useMobileOrientation()
  const { width } = useWindowDimensions()

  useEffect(() => {
    // @ts-ignore
    const controller1 = new ScrollMagic.Controller()
    // @ts-ignore
    const revealElements = document.getElementsByClassName('anim1')

    for (let i = 0; i < revealElements.length; i++) {
      // @ts-ignore
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 10, // start a little later
        triggerHook: 0.9
      })
        .setClassToggle(revealElements[i], 'visible') // add class toggle
        // .addIndicators({ name: 'digit ' + (i + 1) }) // add indicators (requires plugin)
        .addTo(controller1)
    }
  }, [collapsed, widthBlock, modalReservation, modalMaster, modalMore, width])

  const Chakras = ({ widthChakras, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthChakras, marginHorizontal: 0, height: isMobile && isPortrait ? 460 : height }

    return (
      <div id="other" className="digit5 anim1 polaraCSS">
        <View
          // @ts-ignore
          style={[styles.block, b, { backgroundImage: `linear-gradient(135deg, transparent, rgba(12,25,58, 0.9) 50%, transparent)` }]}>
          <View style={{ marginTop: s(5), alignItems: 'center' }}>
            <div
              style={{
                marginTop: s(10),
                width: '100%',
                textAlign: 'center',
                color: '#F3F3F3',
                fontSize: 28,
                fontFamily: 'KreadonRegular',
                fontWeight: '330',
                textTransform: 'uppercase',
                wordWrap: 'break-word'
              }}>
              Чакральная
              <br />
              система
            </div>
          </View>
          <View
            // @ts-ignore
            style={styles.textView}>
            <div
              style={{
                width: '100%',
                opacity: 0.8,
                textAlign: 'justify',
                color: 'white',
                fontSize: 16,
                fontFamily: 'InterRegular',
                fontWeight: '400',
                wordWrap: 'break-word'
              }}>
              Чакральная система имеет более, чем одно измерение - не только физическое, но и духовное. Чакры функционируют не только на физическом, психологическом и эмоциональном плане, но также
              имеют более тонкие аспекты. И если система полноценна, то все остальное будет тоже в порядке, все восстанавливающие и целительные процессы будут автоматически запущены и не только на
              уроне физического тела.
            </div>
          </View>
          <View style={{ marginTop: s(22) }} />
          <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: s(10) }}>
            <AppButton type={'gradient'} title={'Приобрести курс'} press={() => {}} />
            <View style={{ height: s(5) }} />
            <AppButton
              type={'transparent'}
              title={'Подробнее'}
              press={() =>
                dispatch(
                  setModalMore({
                    viewModal: true,
                    typeModal: 'сhakras'
                  })
                )
              }
            />
          </View>
          <View style={{ marginTop: s(10) }} />
        </View>
      </div>
    )
  }

  const Mission = ({ widthMission, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthMission, marginHorizontal: 0, height: isMobile && isPortrait ? 460 : height }

    return (
      <div className="digit4 anim1">
        <View
          // @ts-ignore
          style={[styles.block, b, { backgroundImage: `linear-gradient(35deg, transparent, rgba(12,25,58, 0.9) 50%, transparent)` }]}>
          <View style={{ marginTop: s(5), alignItems: 'center' }}>
            <div
              style={{
                marginTop: s(10),
                width: '100%',
                textAlign: 'center',
                color: '#F3F3F3',
                fontSize: 28,
                fontFamily: 'KreadonRegular',
                fontWeight: '330',
                textTransform: 'uppercase',
                wordWrap: 'break-word'
              }}>
              Миссия человека
              <br />
              12 ключей
            </div>
          </View>
          <View
            // @ts-ignore
            style={styles.textView}>
            <div
              style={{
                width: '100%',
                opacity: 0.8,
                textAlign: 'justify',
                color: 'white',
                fontSize: 16,
                fontFamily: 'InterRegular',
                fontWeight: '400',
                wordWrap: 'break-word'
              }}>
              12 типов энергий, в которых закладываются врожденные основные качества человека, такие как набор глубинных принципов, таланты и задачи личности. Все эти энергии – это разные принципы
              Мироздания, накопление определенных свойств за множество воплощений, а также проявленная индивидуальная основа (суть) личности на данное воплощение. Это мотивация, которой человек
              руководствуется – для чего он делает что-то в этой жизни, а также стратегия и инструменты для реализации своей Миссии.
            </div>
          </View>
          <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: s(10) }}>
            <div
              style={{
                marginBottom: s(10),
                width: '100%',
                opacity: 0.8,
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                fontFamily: 'InterRegular',
                fontWeight: '400',
                wordWrap: 'break-word',
                fontStyle: 'italic'
              }}>
              Курс находится в разработке
            </div>
            <AppButton
              type={'gradient'}
              title={'Забронировать'}
              press={() => {
                dispatch(
                  setModalReservation({
                    viewModal: true,
                    typeModal: 'КУРС: Миссия человека - 12 ключей'
                  })
                )
              }}
            />
            <View style={{ height: s(5) }} />
            <AppButton
              type={'transparent'}
              title={'Подробнее'}
              press={() =>
                dispatch(
                  setModalMore({
                    viewModal: true,
                    typeModal: 'mission'
                  })
                )
              }
            />
          </View>
          <View style={{ marginTop: s(10) }} />
        </View>
      </div>
    )
  }

  const Azesm = ({ widthAzesm, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthAzesm, marginHorizontal: 0, height: isMobile && isPortrait ? 460 : height }

    return (
      <View
        // @ts-ignore
        style={[styles.block, b]}>
        <View style={{ marginTop: s(5), alignItems: 'center' }}>
          <div
            style={{
              marginTop: s(10),
              width: '100%',
              textAlign: 'center',
              color: '#F3F3F3',
              fontSize: 28,
              fontFamily: 'KreadonRegular',
              fontWeight: '330',
              textTransform: 'uppercase',
              wordWrap: 'break-word'
            }}>
            Я есть Род
            <br />
            (родовая система)
          </div>
        </View>
        <View
          // @ts-ignore
          style={styles.textView}>
          <div
            style={{
              width: '100%',
              opacity: 0.8,
              textAlign: 'justify',
              color: 'white',
              fontSize: 16,
              fontFamily: 'InterRegular',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            Родовая система как основа позитивного и негативного наследия Рода...
          </div>
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: s(20) }}>
          <div
            style={{
              marginBottom: s(15),
              width: '100%',
              opacity: 0.8,
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontFamily: 'InterRegular',
              fontWeight: '400',
              wordWrap: 'break-word',
              fontStyle: 'italic'
            }}>
            Курс находится в разработке
          </div>
          <AppButton
            type={'gradient'}
            title={'Забронировать'}
            press={() => {
              dispatch(
                setModalReservation({
                  viewModal: true,
                  typeModal: 'КУРС: Я есть Род (родовая система)'
                })
              )
            }}
          />
          <View style={{ height: s(10) }} />
          <AppButton
            type={'transparent'}
            title={'Подробнее'}
            press={() =>
              dispatch(
                setModalMore({
                  viewModal: true,
                  typeModal: 'azesm'
                })
              )
            }
          />
        </View>
        <View style={{ marginTop: s(20) }} />
      </View>
    )
  }

  const HiddenBlock = () => {
    return (
      <View
        // @ts-ignore
        style={[styles.blockHidden, { flex: 0.5, marginRight: 0, marginHorizontal: 0 }]}
      />
    )
  }

  const MobileBlock = () => {
    if (widthBlock === 0) {
      return <></>
    }

    if (isMobile && isPortrait) {
      return (
        <View>
          <Chakras widthChakras={492} height={540} />
          <Mission widthMission={492} height={540} />
          {/*<Azesm /> */}
        </View>
      )
    } else {
      return (
        <>
          {width > 1100 ? (
            <View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
              <Chakras widthChakras={492} height={600} />
              <View style={{ width: 30 }} />
              <Mission widthMission={492} height={600} />
              {/*<Azesm />*/}
            </View>
          ) : (
            <>
              {width > 800 ? (
                <View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Chakras widthChakras={widthBlock / 2 - 40} height={isMobile && isLandscape ? 540 : 590} />
                  <View style={{ width: 30 }} />
                  <Mission widthMission={widthBlock / 2 - 40} height={isMobile && isLandscape ? 540 : 590} />
                </View>
              ) : (
                <View style={{ marginHorizontal: s(10) }}>
                  <Chakras widthChakras={'100%'} height={520} />
                  <Mission widthMission={'100%'} height={520} />
                </View>
              )}
              {/*<View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>*/}
              {/*  <HiddenBlock />*/}
              {/*  <Azesm />*/}
              {/*  <HiddenBlock />*/}
              {/*</View>*/}
            </>
          )}
        </>
      )
    }
  }

  const Other = () => {
    const w = Dimensions.get('window').width > 1240 ? 1240 : Dimensions.get('window').width

    return (
      <View
        // @ts-ignore
        style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center', flexDirection: 'row' }}
        onLayout={event => {
          const { layout } = event.nativeEvent
          const blocksY = store.getState().app.blocksY
          dispatch(setBlocksY({ ...blocksY, other: layout.y }))
        }}>
        <View style={{ width: (Dimensions.get('window').width - w) / 2, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
        <View style={{ width: w }}>
          <View style={{ position: 'absolute', width: w, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
          <View
            // @ts-ignore
            style={[styles.blockView, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
            <div id="trigger4" />
            <View
              // @ts-ignore
              style={styles.title}>
              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: isMobile && isPortrait ? s(24) : isMobile && !isPortrait ? 38 : 42,
                  fontFamily: 'Forum',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  wordWrap: 'break-word'
                }}>
                ДОПОЛНИТЕЛЬНЫЕ КУРСЫ
              </div>
            </View>
            <View
              style={{ width: '100%' }}
              onLayout={event => {
                const { layout } = event.nativeEvent
                setWidthBlock(layout.width)
              }}>
              <MobileBlock />
            </View>
            <View style={{ marginTop: s(20) }} />
          </View>
        </View>
        <View style={{ width: (Dimensions.get('window').width - w) / 2, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
      </View>
    )
  }

  return <Other />
}

export default OtherBlock
