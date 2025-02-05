/**
 * -----------------------------------------------------------------------
 *  Header      : MasterBlock.tsx
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import AppButton from 'components/ui/button'
import { useStyles } from 'hooks'
import React from 'react'
import { isMobile, useMobileOrientation } from 'react-device-detect'
import { Dimensions, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { store } from 'store'
import { setBlocksY, setModalMaster } from 'store/data'

import stylesConfig from './MasterBlock.styles'

type MasterBlockProps = {
  modalMaster: boolean
}

const T = R.lang

const MasterBlock = ({ modalMaster }: MasterBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const { isPortrait } = useMobileOrientation()
  const { width } = useWindowDimensions()

  const Line = () => {
    return (
      <View>
        <svg width="1" height="399" viewBox="0 0 1 399" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line opacity="0.6" x1="0.5" y1="2.18557e-08" x2="0.499983" y2="399" stroke="url(#paint0_linear_402_935)" />
          <defs>
            <linearGradient id="paint0_linear_402_935" x1="-0.5" y1="-2.18557e-08" x2="-0.500017" y2="399" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.53" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </View>
    )
  }

  const LineWidth = () => {
    return (
      <View style={{ alignSelf: 'center' }}>
        <svg width="352" height="1" viewBox="0 0 352 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line opacity="0.6" x1="4.37114e-08" y1="0.5" x2="352" y2="0.500031" stroke="url(#paint0_linear_370_6371)" />
          <defs>
            <linearGradient id="paint0_linear_370_6371" x1="-4.37114e-08" y1="1.5" x2="352" y2="1.50003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.53" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </View>
    )
  }

  const Money = ({ widthMoney, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthMoney, marginHorizontal: 0, height: isMobile ? 400 : height }

    return (
      <View
        // @ts-ignore
        style={[styles.block, b]}>
        <View style={{ marginTop: isMobile ? s(5) : 0, alignItems: 'center' }}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              color: '#F3F3F3',
              fontSize: 28,
              fontFamily: 'KreadonRegular',
              fontWeight: '330',
              textTransform: 'uppercase',
              wordWrap: 'break-word'
            }}>
            РЕАЛИЗАЦИЯ
            <br /> И ДЕНЬГИ
          </div>
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: s(20) }}>
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
            Мастер-класс
            <br />
            находится в разработке
          </div>
          <AppButton
            type={'gradient'}
            title={'Записаться'}
            press={() => {
              dispatch(
                setModalMaster({
                  viewModal: true,
                  typeModal: 'Мастер-класс: Реализация и деньги'
                })
              )
            }}
          />
        </View>
        <View style={{ marginTop: s(20) }} />
      </View>
    )
  }

  const Parents = ({ widthParents, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthParents, marginHorizontal: 0, height: isMobile ? 400 : height }

    return (
      <View
        // @ts-ignore
        style={[styles.block, b]}>
        <View style={{ marginTop: isMobile ? s(5) : 0, alignItems: 'center' }}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              color: '#F3F3F3',
              fontSize: 28,
              fontFamily: 'KreadonRegular',
              fontWeight: '330',
              textTransform: 'uppercase',
              wordWrap: 'break-word'
            }}>
            РОДИТЕЛИ
            <br /> И ДЕТИ
          </div>
        </View>
        <View
          // @ts-ignore
          style={styles.textView}>
          <div
            style={{
              // width: '100%',
              // marginTop: s(5),
              opacity: 0.8,
              textAlign: 'justify',
              color: 'white',
              fontSize: 16,
              fontFamily: 'InterRegular',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            Детско-родительские отношения, кармические программы и уровни, по которым можно судить об отношениях межу родителями и детьми, влияние на их жизнь и накопленные во многих воплощениях.
            Карма с родителями самая важная, так как это самые близкие кровные узы, а значит и кармические доги, которые уводят в дисбаланс фундамент нашей жизни.
          </div>
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: s(20) }}>
          <AppButton
            type={'gradient'}
            title={'Записаться'}
            press={() => {
              dispatch(
                setModalMaster({
                  viewModal: true,
                  typeModal: 'Мастер-класс: Родители и дети'
                })
              )
            }}
          />
        </View>
        <View style={{ marginTop: s(20) }} />
      </View>
    )
  }

  const Relations = ({ widthRelations, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthRelations, marginHorizontal: 0, height: isMobile ? 400 : height }

    return (
      <View
        // @ts-ignore
        style={[styles.block, b]}>
        <View style={{ marginTop: isMobile ? s(5) : 0, alignItems: 'center' }}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              color: '#F3F3F3',
              fontSize: 28,
              fontFamily: 'KreadonRegular',
              fontWeight: '330',
              textTransform: 'uppercase',
              wordWrap: 'break-word'
            }}>
            ОТНОШЕНИЯ И РОДОВЫЕ
            <br />
            СЦЕНАРИИ
          </div>
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: s(20) }}>
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
            Мастер-класс
            <br />
            находится в разработке
          </div>
          <AppButton
            type={'gradient'}
            title={'Записаться'}
            press={() => {
              dispatch(
                setModalMaster({
                  viewModal: true,
                  typeModal: 'Мастер-класс: Отношения и родовые сценарии'
                })
              )
            }}
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
    if (isMobile && isPortrait) {
      return (
        <>
          <View style={{ marginTop: s(20) }} />
          <LineWidth />
          <Money widthMoney={320} height={360} />
          <LineWidth />
          <Parents widthParents={320} height={360} />
          <LineWidth />
          <Relations widthRelations={320} height={360} />
        </>
      )
    } else {
      return (
        <>
          {width > 1100 ? (
            <View style={{ marginTop: s(10), marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
              <Money widthMoney={320} height={600} />
              <Line />
              <Parents widthParents={320} height={600} />
              <Line />
              <Relations widthRelations={320} height={600} />
            </View>
          ) : (
            <>
              {width > 800 ? (
                <>
                  <View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Money widthMoney={380} height={500} />
                    <Line />
                    <Parents widthParents={380} height={500} />
                  </View>
                  <View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <HiddenBlock />
                    <Line />
                    <Relations widthRelations={380} height={500} />
                    <Line />
                    <HiddenBlock />
                  </View>
                </>
              ) : (
                <View style={{ marginHorizontal: s(10) }}>
                  <Money widthMoney={'100%'} height={380} />
                  <LineWidth />
                  <Parents widthParents={'100%'} height={380} />
                  <LineWidth />
                  <Relations widthRelations={'100%'} height={380} />
                </View>
              )}
            </>
          )}
        </>
      )
    }
  }

  const Master = ({ startY, endY, location1, location2, location3 }: any) => {
    return (
      <div id="master" className="polaraCSS">
        <View
          // @ts-ignore
          style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center' }}
          onLayout={event => {
            const { layout } = event.nativeEvent
            const blocksY = store.getState().app.blocksY
            dispatch(setBlocksY({ ...blocksY, master: layout.y }))
          }}>
          <View style={{ width: Dimensions.get('window').width > 1240 ? 1240 : Dimensions.get('window').width }}>
            <View
              // @ts-ignore
              style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
              <View
                // @ts-ignore
                style={styles.title}>
                <div
                  id="master"
                  style={{
                    opacity: 0.8,
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: isMobile && isPortrait ? s(24) : isMobile && !isPortrait ? 38 : 42,
                    fontFamily: 'Forum',
                    fontWeight: '400',
                    textTransform: 'uppercase',
                    wordWrap: 'break-word'
                  }}>
                  МАСТЕР-КЛАССЫ
                </div>
                <div
                  style={{
                    marginTop: s(2),
                    width: '100%',
                    opacity: 0.6,
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'InterRegular',
                    fontWeight: '300',
                    wordWrap: 'break-word'
                  }}>
                  После прохождения базового курса
                </div>
              </View>
              <MobileBlock />
              <View style={{ height: s(10) }} />
            </View>
          </View>
        </View>
      </div>
    )
  }

  if (isMobile) {
    return <Master startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
  }

  return <Master startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
}

export default MasterBlock
