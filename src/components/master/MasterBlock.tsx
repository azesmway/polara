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
import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { setModalMaster } from 'store/data'

import stylesConfig from './MasterBlock.styles'

type MasterBlockProps = {
  modalMaster: boolean
}

const T = R.lang

const MasterBlock = ({ modalMaster }: MasterBlockProps) => {
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

  const Ellipse = ({ style }: any) => {
    return (
      <View style={{ position: 'absolute', ...style }}>
        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.3573e-08 2C-3.29915e-08 0.89543 0.89543 -2.05427e-07 2 -3.01992e-07C3.10457 -3.98556e-07 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 1.60138e-07 3.10457 6.3573e-08 2Z"
            fill="#F6F6F6"
          />
        </svg>
      </View>
    )
  }

  const Master = ({ startY, endY, location1, location2, location3 }: any) => {
    return (
      <LinearGradient
        start={{ x: 0.8, y: startY }}
        end={{ x: 1.0, y: endY }}
        locations={[location1, location2, location3]}
        colors={['#061A43', 'rgba(28,47,79,1)', 'rgba(31,57,92,1)']}
        // @ts-ignore
        style={styles.gradient}>
        <View
          // @ts-ignore
          style={styles.mainView}>
          <View
            // @ts-ignore
            style={styles.mainViewInSide}>
            <View
              // @ts-ignore
              style={styles.title}>
              <div
                id="master"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: s(24),
                  fontFamily: 'Forum',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  wordWrap: 'break-word'
                }}>
                МАСТЕР-КЛАССЫ
              </div>
              <div
                style={{
                  marginTop: s(10),
                  width: '100%',
                  opacity: 0.8,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: s(12),
                  fontFamily: 'InterRegular',
                  fontWeight: '300',
                  wordWrap: 'break-word'
                }}>
                После прохождения базового курса
              </div>
            </View>

            <View
              // @ts-ignore
              style={styles.block}>
              <View style={{ marginTop: s(10), alignItems: 'center' }}>
                <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18.5" cy="2" r="2" transform="rotate(180 18.5 2)" fill="#F6F6F6" />
                  <path d="M8.5 2C8.5 0.895431 9.39543 2.7141e-07 10.5 1.74846e-07C11.6046 7.8281e-08 12.5 0.895431 12.5 2C12.5 3.10457 11.6046 4 10.5 4C9.39543 4 8.5 3.10457 8.5 2Z" fill="#F6F6F6" />
                  <circle cx="2.5" cy="2" r="2" transform="rotate(180 2.5 2)" fill="#F6F6F6" />
                </svg>
              </View>
              <View style={{ marginTop: s(10), alignItems: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    color: '#F3F3F3',
                    fontSize: s(17),
                    fontFamily: 'KreadonRegular',
                    fontWeight: '330',
                    textTransform: 'uppercase',
                    wordWrap: 'break-word'
                  }}>
                  РОДИТЕЛИ И ДЕТИ
                </div>
              </View>
              <View style={{ marginTop: s(20), alignItems: 'center' }}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    /* eslint-disable-next-line max-len */
                    d="M19.5 10H20.5C20.7652 10 21.0196 10.1054 21.2071 10.2929C21.3946 10.4804 21.5 10.7348 21.5 11V21C21.5 21.2652 21.3946 21.5196 21.2071 21.7071C21.0196 21.8946 20.7652 22 20.5 22H4.5C4.23478 22 3.98043 21.8946 3.79289 21.7071C3.60536 21.5196 3.5 21.2652 3.5 21V11C3.5 10.7348 3.60536 10.4804 3.79289 10.2929C3.98043 10.1054 4.23478 10 4.5 10H5.5V9C5.5 7.14348 6.2375 5.36301 7.55025 4.05025C8.86301 2.7375 10.6435 2 12.5 2C14.3565 2 16.137 2.7375 17.4497 4.05025C18.7625 5.36301 19.5 7.14348 19.5 9V10ZM17.5 10V9C17.5 7.67392 16.9732 6.40215 16.0355 5.46447C15.0979 4.52678 13.8261 4 12.5 4C11.1739 4 9.90215 4.52678 8.96447 5.46447C8.02678 6.40215 7.5 7.67392 7.5 9V10H17.5ZM11.5 14V18H13.5V14H11.5Z"
                    fill="white"
                  />
                </svg>
                <div
                  style={{
                    marginTop: s(5),
                    width: '100%',
                    opacity: 0.8,
                    textAlign: 'center',
                    color: 'white',
                    fontSize: s(12),
                    fontFamily: 'InterRegular',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                  }}>
                  Мастер-класс находится в разработке
                </div>
              </View>
              <View style={{ marginTop: s(20) }}>
                <div
                  style={{
                    width: '100%',
                    opacity: 0.8,
                    textAlign: 'justify',
                    color: 'white',
                    fontSize: s(12),
                    fontFamily: 'InterRegular',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                  }}>
                  Детско-родительские отношения, кармические программы и уровни, по которым можно судить об отношениях межу родителями и детьми, влияние на их жизнь и накопленные во многих
                  воплощениях. Карма с родителями самая важная, так как это самые близкие кровные узы, а значит и кармические доги, которые уводят в дисбаланс фундамент нашей жизни.
                </div>
              </View>
              <View style={{ marginTop: s(40), alignItems: 'center' }}>
                <AppButton
                  type={'gradient'}
                  title={'Записаться'}
                  press={() =>
                    dispatch(
                      setModalMaster({
                        viewModal: true,
                        typeModal: 'КУРС: Родители и дети'
                      })
                    )
                  }
                />
              </View>
              <Ellipse style={{ top: -2, left: -2 }} />
              <Ellipse style={{ top: -2, right: -2 }} />
              <Ellipse style={{ bottom: -2, left: -2 }} />
              <Ellipse style={{ bottom: -2, right: -2 }} />
              <View style={{ height: s(20) }} />
            </View>

            {/*<View*/}
            {/*  // @ts-ignore*/}
            {/*  style={styles.block}>*/}
            {/*  <View style={{ marginTop: s(10), alignItems: 'center' }}>*/}
            {/*    <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <circle cx="18.5" cy="2" r="2" transform="rotate(180 18.5 2)" fill="#F6F6F6" />*/}
            {/*      <path d="M8.5 2C8.5 0.895431 9.39543 2.7141e-07 10.5 1.74846e-07C11.6046 7.8281e-08 12.5 0.895431 12.5 2C12.5 3.10457 11.6046 4 10.5 4C9.39543 4 8.5 3.10457 8.5 2Z" fill="#F6F6F6" />*/}
            {/*      <circle cx="2.5" cy="2" r="2" transform="rotate(180 2.5 2)" fill="#F6F6F6" />*/}
            {/*    </svg>*/}
            {/*  </View>*/}
            {/*  <View style={{ marginTop: s(10), alignItems: 'center' }}>*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        width: '100%',*/}
            {/*        textAlign: 'center',*/}
            {/*        color: '#F3F3F3',*/}
            {/*        fontSize: s(17),*/}
            {/*        fontFamily: 'KreadonRegular',*/}
            {/*        fontWeight: '330',*/}
            {/*        textTransform: 'uppercase',*/}
            {/*        wordWrap: 'break-word'*/}
            {/*      }}>*/}
            {/*      РЕАЛИЗАЦИЯ И ДЕНЬГИ*/}
            {/*    </div>*/}
            {/*  </View>*/}
            {/*  <View style={{ marginTop: s(20), alignItems: 'center' }}>*/}
            {/*    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*        /* eslint-disable-next-line max-len */}
            {/*        d="M19.5 10H20.5C20.7652 10 21.0196 10.1054 21.2071 10.2929C21.3946 10.4804 21.5 10.7348 21.5 11V21C21.5 21.2652 21.3946 21.5196 21.2071 21.7071C21.0196 21.8946 20.7652 22 20.5 22H4.5C4.23478 22 3.98043 21.8946 3.79289 21.7071C3.60536 21.5196 3.5 21.2652 3.5 21V11C3.5 10.7348 3.60536 10.4804 3.79289 10.2929C3.98043 10.1054 4.23478 10 4.5 10H5.5V9C5.5 7.14348 6.2375 5.36301 7.55025 4.05025C8.86301 2.7375 10.6435 2 12.5 2C14.3565 2 16.137 2.7375 17.4497 4.05025C18.7625 5.36301 19.5 7.14348 19.5 9V10ZM17.5 10V9C17.5 7.67392 16.9732 6.40215 16.0355 5.46447C15.0979 4.52678 13.8261 4 12.5 4C11.1739 4 9.90215 4.52678 8.96447 5.46447C8.02678 6.40215 7.5 7.67392 7.5 9V10H17.5ZM11.5 14V18H13.5V14H11.5Z"*/}
            {/*        fill="white"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        marginTop: s(5),*/}
            {/*        width: '100%',*/}
            {/*        opacity: 0.8,*/}
            {/*        textAlign: 'center',*/}
            {/*        color: 'white',*/}
            {/*        fontSize: s(12),*/}
            {/*        fontFamily: 'InterRegular',*/}
            {/*        fontWeight: '400',*/}
            {/*        wordWrap: 'break-word'*/}
            {/*      }}>*/}
            {/*      Курс находится в разработке*/}
            {/*    </div>*/}
            {/*  </View>*/}
            {/*  <View style={{ marginTop: s(40), alignItems: 'center' }}>*/}
            {/*    <AppButton*/}
            {/*      type={'gradient'}*/}
            {/*      title={'Записаться'}*/}
            {/*      press={() =>*/}
            {/*        dispatch(*/}
            {/*          setModalMaster({*/}
            {/*            viewModal: true,*/}
            {/*            typeModal: 'КУРС: Реализация и деньги'*/}
            {/*          })*/}
            {/*        )*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </View>*/}
            {/*  <Ellipse style={{ top: -2, left: -2 }} />*/}
            {/*  <Ellipse style={{ top: -2, right: -2 }} />*/}
            {/*  <Ellipse style={{ bottom: -2, left: -2 }} />*/}
            {/*  <Ellipse style={{ bottom: -2, right: -2 }} />*/}
            {/*  <View style={{ height: s(20) }} />*/}
            {/*</View>*/}

            {/*<View*/}
            {/*  // @ts-ignore*/}
            {/*  style={styles.block}>*/}
            {/*  <View style={{ marginTop: s(10), alignItems: 'center' }}>*/}
            {/*    <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <circle cx="18.5" cy="2" r="2" transform="rotate(180 18.5 2)" fill="#F6F6F6" />*/}
            {/*      <path d="M8.5 2C8.5 0.895431 9.39543 2.7141e-07 10.5 1.74846e-07C11.6046 7.8281e-08 12.5 0.895431 12.5 2C12.5 3.10457 11.6046 4 10.5 4C9.39543 4 8.5 3.10457 8.5 2Z" fill="#F6F6F6" />*/}
            {/*      <circle cx="2.5" cy="2" r="2" transform="rotate(180 2.5 2)" fill="#F6F6F6" />*/}
            {/*    </svg>*/}
            {/*  </View>*/}
            {/*  <View style={{ marginTop: s(10), alignItems: 'center' }}>*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        width: '100%',*/}
            {/*        textAlign: 'center',*/}
            {/*        color: '#F3F3F3',*/}
            {/*        fontSize: s(17),*/}
            {/*        fontFamily: 'KreadonRegular',*/}
            {/*        fontWeight: '330',*/}
            {/*        textTransform: 'uppercase',*/}
            {/*        wordWrap: 'break-word'*/}
            {/*      }}>*/}
            {/*      ОТНОШЕНИЯ И РОДОВЫЕ*/}
            {/*      <br />*/}
            {/*      СЦЕНАРИИ*/}
            {/*    </div>*/}
            {/*  </View>*/}
            {/*  <View style={{ marginTop: s(20), alignItems: 'center' }}>*/}
            {/*    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*        /* eslint-disable-next-line max-len */}
            {/*        d="M19.5 10H20.5C20.7652 10 21.0196 10.1054 21.2071 10.2929C21.3946 10.4804 21.5 10.7348 21.5 11V21C21.5 21.2652 21.3946 21.5196 21.2071 21.7071C21.0196 21.8946 20.7652 22 20.5 22H4.5C4.23478 22 3.98043 21.8946 3.79289 21.7071C3.60536 21.5196 3.5 21.2652 3.5 21V11C3.5 10.7348 3.60536 10.4804 3.79289 10.2929C3.98043 10.1054 4.23478 10 4.5 10H5.5V9C5.5 7.14348 6.2375 5.36301 7.55025 4.05025C8.86301 2.7375 10.6435 2 12.5 2C14.3565 2 16.137 2.7375 17.4497 4.05025C18.7625 5.36301 19.5 7.14348 19.5 9V10ZM17.5 10V9C17.5 7.67392 16.9732 6.40215 16.0355 5.46447C15.0979 4.52678 13.8261 4 12.5 4C11.1739 4 9.90215 4.52678 8.96447 5.46447C8.02678 6.40215 7.5 7.67392 7.5 9V10H17.5ZM11.5 14V18H13.5V14H11.5Z"*/}
            {/*        fill="white"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        marginTop: s(5),*/}
            {/*        width: '100%',*/}
            {/*        opacity: 0.8,*/}
            {/*        textAlign: 'center',*/}
            {/*        color: 'white',*/}
            {/*        fontSize: s(12),*/}
            {/*        fontFamily: 'InterRegular',*/}
            {/*        fontWeight: '400',*/}
            {/*        wordWrap: 'break-word'*/}
            {/*      }}>*/}
            {/*      Курс находится в разработке*/}
            {/*    </div>*/}
            {/*  </View>*/}
            {/*  <View style={{ marginTop: s(40), alignItems: 'center' }}>*/}
            {/*    <AppButton*/}
            {/*      type={'gradient'}*/}
            {/*      title={'Записаться'}*/}
            {/*      press={() =>*/}
            {/*        dispatch(*/}
            {/*          setModalMaster({*/}
            {/*            viewModal: true,*/}
            {/*            typeModal: 'КУРС: Отношения и родовые сценарии'*/}
            {/*          })*/}
            {/*        )*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </View>*/}
            {/*  <Ellipse style={{ top: -2, left: -2 }} />*/}
            {/*  <Ellipse style={{ top: -2, right: -2 }} />*/}
            {/*  <Ellipse style={{ bottom: -2, left: -2 }} />*/}
            {/*  <Ellipse style={{ bottom: -2, right: -2 }} />*/}
            {/*  <View style={{ height: s(20) }} />*/}
            {/*</View>*/}
          </View>
        </View>
      </LinearGradient>
    )
  }

  if (screenSize.width < 540) {
    return <Master startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
  }

  return <Master startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
}

export default MasterBlock
