/**
 * -----------------------------------------------------------------------
 *  Header      : PurposeBlock.tsx
 *  Created     : 29.12.2024
 *  Modified    : 29.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import AppButton from 'components/ui/button'
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { setModalMore } from 'store/data'

import stylesConfig from './PurposeBlock.styles'

type PurposeBlockProps = {
  setCollapsed: any
  collapsed: boolean
}

const T = R.lang

const PurposeBlock = ({ collapsed, setCollapsed }: PurposeBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispach = useDispatch()
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

  const Purpose = ({ startY, endY, location1, location2, location3 }: any) => {
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
              style={styles.titleView}>
              <div
                id="methodPay"
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: s(24),
                  fontFamily: 'Forum',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  wordWrap: 'break-word'
                }}>
                КУРС «ПРЕДНАЗНАЧЕНИЕ»
              </div>
            </View>
            <View
              // @ts-ignore
              style={styles.block}>
              <View
                // @ts-ignore
                style={styles.textView}>
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
                  Предназначение – это энергия человека, то, чем он обладает на физическом и духовном уровне для раскрытия своих талантов, усовершенствования навыков, раскрытия потенциала его личности
                  и понимание на что он способен.
                </div>
              </View>
              <View
                // @ts-ignore
                style={styles.price}>
                <div
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'rgba(243, 243, 243, 0.40)',
                    fontSize: 20,
                    fontFamily: 'Forum',
                    fontWeight: '400',
                    textDecoration: 'line-through',
                    wordWrap: 'break-word'
                  }}>
                  45 000 руб
                </div>
                <div
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    color: '#F3F3F3',
                    fontSize: 38,
                    fontFamily: 'Forum',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                  }}>
                  38 990 руб
                </div>
              </View>
              <View
                // @ts-ignore
                style={[styles.price, { marginTop: s(40) }]}>
                <AppButton type={'white'} title={'Приобрести курс'} press={() => {}} />
                <View style={{ height: s(10) }} />
                <AppButton
                  type={'gradient'}
                  title={'Подробнее'}
                  press={() =>
                    dispach(
                      setModalMore({
                        viewModal: true,
                        typeModal: 'purpose'
                      })
                    )
                  }
                />
              </View>
              <View
                // @ts-ignore
                style={styles.parts}>
                <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
                  <div
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      color: '#F6F6F6',
                      fontSize: s(15),
                      fontFamily: 'Forum',
                      fontWeight: '400',
                      textDecoration: 'underline',
                      wordWrap: 'break-word'
                    }}>
                    Приобрести курс частями
                  </div>
                </TouchableOpacity>
              </View>
              {!collapsed && (
                <View
                  // @ts-ignore
                  style={styles.courses}>
                  <View style={{ alignItems: 'center' }}>
                    <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18.5" cy="2" r="2" transform="rotate(180 18.5 2)" fill="#F6F6F6" />
                      <path
                        d="M8.5 2C8.5 0.895431 9.39543 2.7141e-07 10.5 1.74846e-07C11.6046 7.8281e-08 12.5 0.895431 12.5 2C12.5 3.10457 11.6046 4 10.5 4C9.39543 4 8.5 3.10457 8.5 2Z"
                        fill="#F6F6F6"
                      />
                      <circle cx="2.5" cy="2" r="2" transform="rotate(180 2.5 2)" fill="#F6F6F6" />
                    </svg>
                  </View>
                  <View style={{ marginTop: s(5), alignItems: 'center' }}>
                    <div
                      style={{
                        marginTop: s(6),
                        width: '100%',
                        opacity: 0.6,
                        textAlign: 'center',
                        color: '#F6F6F6',
                        fontSize: s(15),
                        fontFamily: 'Forum',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      1 модуль
                    </div>
                    <div
                      style={{
                        marginTop: s(10),
                        width: '100%',
                        textAlign: 'center',
                        color: '#F3F3F3',
                        fontSize: s(17),
                        fontFamily: 'KreadonRegular',
                        fontWeight: '330',
                        textTransform: 'uppercase',
                        wordWrap: 'break-word'
                      }}>
                      Личное предназначение
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
                        fontSize: s(12),
                        fontFamily: 'InterRegular',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      Дата, месяц и год рождения – это коды Судьбы и определенные энергии созвучные с человеком. Они влияют на всю его жизнь и являются базой на протяжении всего пути на это
                      воплощение, в определенны период времени ставя задачи и помогая их решить.
                    </div>
                  </View>
                  <View style={{ marginTop: s(20), alignItems: 'center' }}>
                    <div
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        color: '#F3F3F3',
                        fontSize: s(24),
                        fontFamily: 'Forum',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      15 000 руб
                    </div>
                  </View>
                  <View style={{ marginTop: s(20), alignItems: 'center' }}>
                    <AppButton type={'gradient'} title={'Приобрести модуль'} press={() => {}} />
                    <View style={{ height: s(10) }} />
                    <AppButton
                      type={'transparent'}
                      title={'Подробнее'}
                      press={() =>
                        dispach(
                          setModalMore({
                            viewModal: true,
                            typeModal: 'personal'
                          })
                        )
                      }
                    />
                  </View>
                  <View style={{ marginTop: s(30), alignItems: 'center' }}>
                    <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18.5" cy="2" r="2" transform="rotate(180 18.5 2)" fill="#F6F6F6" />
                      <path
                        d="M8.5 2C8.5 0.895431 9.39543 2.7141e-07 10.5 1.74846e-07C11.6046 7.8281e-08 12.5 0.895431 12.5 2C12.5 3.10457 11.6046 4 10.5 4C9.39543 4 8.5 3.10457 8.5 2Z"
                        fill="#F6F6F6"
                      />
                      <circle cx="2.5" cy="2" r="2" transform="rotate(180 2.5 2)" fill="#F6F6F6" />
                    </svg>
                  </View>
                  <View style={{ marginTop: s(5), alignItems: 'center' }}>
                    <div
                      style={{
                        marginTop: s(6),
                        width: '100%',
                        opacity: 0.6,
                        textAlign: 'center',
                        color: '#F6F6F6',
                        fontSize: s(15),
                        fontFamily: 'Forum',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      2 модуль
                    </div>
                    <div
                      style={{
                        marginTop: s(10),
                        width: '100%',
                        textAlign: 'center',
                        color: '#F3F3F3',
                        fontSize: s(17),
                        fontFamily: 'KreadonRegular',
                        fontWeight: '330',
                        textTransform: 'uppercase',
                        wordWrap: 'break-word'
                      }}>
                      Родовое предназначение
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
                        fontSize: s(12),
                        fontFamily: 'InterRegular',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      Понимание и работа с Родом меняет не только жизнь самого человека, но и жизнь ваших родных, а также дальних родственников, что в итоге приносит блага всей Родовой системе и
                      открывает доступ к Силе Рода.
                    </div>
                  </View>
                  <View style={{ marginTop: s(14), alignItems: 'center' }}>
                    <div
                      style={{
                        width: '92%',
                        height: s(26),
                        borderRadius: 100,
                        border: '1px rgba(245.65, 245.65, 245.65, 0.20) solid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        display: 'inline-flex'
                      }}>
                      <div
                        style={{
                          flex: '1 1 0',
                          opacity: 0.9,
                          textAlign: 'center',
                          color: '#F6F6F6',
                          fontSize: s(12),
                          fontFamily: 'Forum',
                          fontWeight: '400',
                          wordWrap: 'break-word'
                        }}>
                        Необходимо пройти 1 модуль
                      </div>
                    </div>
                  </View>
                  <View style={{ marginTop: s(20), alignItems: 'center' }}>
                    <div
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        color: '#F3F3F3',
                        fontSize: s(24),
                        fontFamily: 'Forum',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      15 000 руб
                    </div>
                  </View>
                  <View style={{ marginTop: s(20), alignItems: 'center' }}>
                    <AppButton type={'gradient'} title={'Приобрести модуль'} press={() => {}} />
                    <View style={{ height: s(10) }} />
                    <AppButton
                      type={'transparent'}
                      title={'Подробнее'}
                      press={() =>
                        dispach(
                          setModalMore({
                            viewModal: true,
                            typeModal: 'generic'
                          })
                        )
                      }
                    />
                  </View>
                  <View style={{ marginTop: s(30), alignItems: 'center' }}>
                    <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18.5" cy="2" r="2" transform="rotate(180 18.5 2)" fill="#F6F6F6" />
                      <path
                        d="M8.5 2C8.5 0.895431 9.39543 2.7141e-07 10.5 1.74846e-07C11.6046 7.8281e-08 12.5 0.895431 12.5 2C12.5 3.10457 11.6046 4 10.5 4C9.39543 4 8.5 3.10457 8.5 2Z"
                        fill="#F6F6F6"
                      />
                      <circle cx="2.5" cy="2" r="2" transform="rotate(180 2.5 2)" fill="#F6F6F6" />
                    </svg>
                  </View>
                  <View style={{ marginTop: s(5), alignItems: 'center' }}>
                    <div
                      style={{
                        marginTop: s(6),
                        width: '100%',
                        opacity: 0.6,
                        textAlign: 'center',
                        color: '#F6F6F6',
                        fontSize: s(15),
                        fontFamily: 'Forum',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      3 модуль
                    </div>
                    <div
                      style={{
                        marginTop: s(10),
                        width: '100%',
                        textAlign: 'center',
                        color: '#F3F3F3',
                        fontSize: s(17),
                        fontFamily: 'KreadonRegular',
                        fontWeight: '330',
                        textTransform: 'uppercase',
                        wordWrap: 'break-word'
                      }}>
                      ДУХОВНОЕ ПРЕДНАЗНАЧЕНИЕ
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
                        fontSize: s(12),
                        fontFamily: 'InterRegular',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      Духовное предназначение – это точка духовной гармонии, оно раскрывает смысл того, для чего вы сюда пришли, в этот мир, в эту материю. Именно оно приносит смысл в вашу жизнь!
                    </div>
                  </View>
                  <View style={{ marginTop: s(20), alignItems: 'center' }}>
                    <div
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        color: '#F3F3F3',
                        fontSize: s(24),
                        fontFamily: 'Forum',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                      15 000 руб
                    </div>
                  </View>
                  <View style={{ marginTop: s(20), alignItems: 'center' }}>
                    <AppButton type={'gradient'} title={'Приобрести модуль'} press={() => {}} />
                    <View style={{ height: s(10) }} />
                    <AppButton
                      type={'transparent'}
                      title={'Подробнее'}
                      press={() =>
                        dispach(
                          setModalMore({
                            viewModal: true,
                            typeModal: 'spiritual'
                          })
                        )
                      }
                    />
                  </View>
                </View>
              )}
              <Ellipse style={{ top: -2, left: -2 }} />
              <Ellipse style={{ top: -2, right: -2 }} />
              <Ellipse style={{ bottom: -2, left: -2 }} />
              <Ellipse style={{ bottom: -2, right: -2 }} />
              <View style={{ height: s(20) }} />
            </View>
            <View style={{ height: s(30) }} />
          </View>
        </View>
      </LinearGradient>
    )
  }

  if (screenSize.width < 540) {
    return <Purpose startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
  }

  return <Purpose startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
}

export default PurposeBlock
