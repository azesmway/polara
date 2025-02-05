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
import { isMobile, useMobileOrientation } from 'react-device-detect'
import { useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import R from 'res'
import { RootState, store } from 'store'
import { setBlocksY, setModalMore } from 'store/data'

import stylesConfig from './PurposeBlock.styles'

type PurposeBlockProps = {
  setCollapsed: any
  collapsed: boolean
}

const T = R.lang

const PurposeBlock = ({ collapsed, setCollapsed }: PurposeBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()

  const [widthBlock, setWidthBlock] = useState(0)

  const modalReservation = useSelector((state: RootState) => state.app.modalReservation)
  const modalMaster = useSelector((state: RootState) => state.app.modalMaster)
  const modalMore = useSelector((state: RootState) => state.app.modalMore)

  const { isPortrait } = useMobileOrientation()
  const { width } = useWindowDimensions()

  useEffect(() => {
    // @ts-ignore
    const controller = new ScrollMagic.Controller()
    // @ts-ignore
    const revealElements = document.getElementsByClassName('anim')

    for (let i = 0; i < revealElements.length; i++) {
      // @ts-ignore
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 10, // start a little later
        triggerHook: 0.9
      })
        .setClassToggle(revealElements[i], 'visible') // add class toggle
        .addTo(controller)
    }

    // @ts-ignore
    new ScrollMagic.Scene({
      triggerElement: '#trigger1',
      offset: 50, // start a little later
      triggerHook: 0.9
    })
      // @ts-ignore
      .setTween(TweenMax.fromTo('#animate1', 0.2, { scale: 0.1, opacity: 0 }, { scale: 1, opacity: 1 }))
      .addTo(controller)
  }, [widthBlock, modalReservation, modalMaster, modalMore, width, collapsed])

  const Personal = ({ widthPersonal, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthPersonal, marginHorizontal: 0, height: isMobile ? 460 : height }

    return (
      <View
        // @ts-ignore
        style={[styles.block, b]}>
        <View style={{ marginTop: s(5), alignItems: 'center' }}>
          <div
            style={{
              marginTop: s(6),
              width: '100%',
              opacity: 0.6,
              textAlign: 'center',
              color: '#F6F6F6',
              fontSize: isMobile && isPortrait ? s(15) : isMobile && !isPortrait ? 22 : 24,
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
              fontSize: 28,
              fontFamily: 'KreadonRegular',
              fontWeight: '330',
              textTransform: 'uppercase',
              wordWrap: 'break-word'
            }}>
            Личное
            <br />
            предназначение
          </div>
        </View>
        <View
          // @ts-ignore
          style={[styles.textView, { height: 140 }]}>
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
            Дата, месяц и год рождения – это коды Судьбы и определенные энергии созвучные с человеком. Они влияют на всю его жизнь и являются базой на протяжении всего пути на это воплощение, в
            определенны период времени ставя задачи и помогая их решить.
          </div>
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
          <View style={{ marginTop: s(10), alignItems: 'center' }}>
            {/*<AppButton type={'gradient'} title={'Приобрести модуль'} press={() => {}} />*/}
            {/*<View style={{ height: s(10) }} />*/}
            <AppButton
              type={'transparent'}
              title={'Программа модуля'}
              press={() =>
                dispatch(
                  setModalMore({
                    viewModal: true,
                    typeModal: 'personal'
                  })
                )
              }
            />
          </View>
          <View style={{ marginTop: s(10) }} />
        </View>
      </View>
    )
  }

  const Generic = ({ widthGeneric, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthGeneric, marginHorizontal: 0, height: isMobile ? 460 : height }

    return (
      <View
        // @ts-ignore
        style={[styles.block, b]}>
        <View style={{ marginTop: s(5), alignItems: 'center' }}>
          <div
            style={{
              marginTop: s(6),
              width: '100%',
              opacity: 0.6,
              textAlign: 'center',
              color: '#F6F6F6',
              fontSize: isMobile && isPortrait ? s(15) : isMobile && !isPortrait ? 22 : 24,
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
              fontSize: 28,
              fontFamily: 'KreadonRegular',
              fontWeight: '330',
              textTransform: 'uppercase',
              wordWrap: 'break-word'
            }}>
            Родовое
            <br />
            предназначение
          </div>
        </View>
        <View
          // @ts-ignore
          style={[styles.textView, { height: 140 }]}>
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
            Понимание и работа с Родом меняет не только жизнь самого человека, но и жизнь ваших родных, а также дальних родственников, что в итоге приносит блага всей Родовой системе и открывает
            доступ к Силе Рода.
          </div>
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
          <View style={{ marginTop: s(10), alignItems: 'center' }}>
            <div
              style={{
                flex: '1 1 0',
                opacity: 0.9,
                textAlign: 'center',
                color: '#F6F6F6',
                fontSize: isMobile && isPortrait ? s(15) : isMobile && !isPortrait ? 16 : 16,
                fontFamily: 'Forum',
                fontWeight: '400',
                wordWrap: 'break-word'
              }}>
              ВНИМАНИЕ!!!
              <br />
              Необходимо пройти 1 модуль
            </div>
          </View>
          <View style={{ marginTop: s(10), alignItems: 'center' }}>
            {/*<AppButton type={'gradient'} title={'Приобрести модуль'} press={() => {}} />*/}
            {/*<View style={{ height: s(10) }} />*/}
            <AppButton
              type={'transparent'}
              title={'Программа модуля'}
              press={() =>
                dispatch(
                  setModalMore({
                    viewModal: true,
                    typeModal: 'generic'
                  })
                )
              }
            />
          </View>
          <View style={{ marginTop: s(10) }} />
        </View>
      </View>
    )
  }

  const Spiritual = ({ widthSpiritual, height }: any) => {
    const b = isMobile && isPortrait ? { height: height } : { width: widthSpiritual, marginHorizontal: 0, height: isMobile ? 460 : height }

    return (
      <View
        // @ts-ignore
        style={[styles.block, b]}>
        <View style={{ marginTop: s(5), alignItems: 'center' }}>
          <div
            style={{
              marginTop: s(6),
              width: '100%',
              opacity: 0.6,
              textAlign: 'center',
              color: '#F6F6F6',
              fontSize: isMobile && isPortrait ? s(15) : isMobile && !isPortrait ? 22 : 24,
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
              fontSize: 28,
              fontFamily: 'KreadonRegular',
              fontWeight: '330',
              textTransform: 'uppercase',
              wordWrap: 'break-word'
            }}>
            ДУХОВНОЕ
            <br />
            ПРЕДНАЗНАЧЕНИЕ
          </div>
        </View>
        <View
          // @ts-ignore
          style={[styles.textView, { height: 140 }]}>
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
            Духовное предназначение – это точка духовной гармонии, оно раскрывает смысл того, для чего вы сюда пришли, в этот мир, в эту материю. Именно оно приносит смысл в вашу жизнь!
          </div>
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
          <View style={{ marginTop: s(10), alignItems: 'center' }}>
            <div
              style={{
                flex: '1 1 0',
                opacity: 0.9,
                textAlign: 'center',
                color: '#F6F6F6',
                fontSize: isMobile && isPortrait ? s(15) : isMobile && !isPortrait ? 16 : 16,
                fontFamily: 'Forum',
                fontWeight: '400',
                wordWrap: 'break-word'
              }}>
              ВНИМАНИЕ!!!
              <br />
              Необходимо пройти 1 и 2 модуль
            </div>
          </View>
          <View style={{ marginTop: s(10), alignItems: 'center' }}>
            {/*<AppButton type={'gradient'} title={'Приобрести модуль'} press={() => {}} />*/}
            {/*<View style={{ height: s(10) }} />*/}
            <AppButton
              type={'transparent'}
              title={'Программа модуля'}
              press={() =>
                dispatch(
                  setModalMore({
                    viewModal: true,
                    typeModal: 'spiritual'
                  })
                )
              }
            />
          </View>
          <View style={{ marginTop: s(10) }} />
        </View>
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
      if (collapsed) {
        return <></>
      } else {
        return (
          <View>
            <div className="digit1 anim">
              <Personal widthPersonal={320} height={460} />
            </div>
            <div className="digit2 anim">
              <Generic widthGeneric={320} height={460} />
            </div>
            <div className="digit3 anim">
              <Spiritual widthSpiritual={320} height={460} />
            </div>
          </View>
        )
      }
    } else {
      return (
        <>
          {width > 1100 ? (
            <View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
              <div className="digit1 anim">
                <Personal widthPersonal={320} height={540} />
              </div>
              <div className="digit2 anim">
                <Generic widthGeneric={320} height={540} />
              </div>
              <div className="digit3 anim">
                <Spiritual widthSpiritual={320} height={540} />
              </div>
            </View>
          ) : (
            <>
              {width > 800 ? (
                <>
                  <View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div className="digit1 anim">
                      <Personal widthPersonal={widthBlock / 2 - 40} height={460} />
                    </div>
                    <View style={{ width: 20 }} />
                    <div className="digit3 anim">
                      <Generic widthGeneric={widthBlock / 2 - 40} height={460} />
                    </div>
                  </View>
                  <View style={{ marginHorizontal: s(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <HiddenBlock />
                    <div className="digit2 anim">
                      <Spiritual widthSpiritual={widthBlock / 2 - 40} height={460} />
                    </div>
                    <HiddenBlock />
                  </View>
                </>
              ) : (
                <View style={{ marginHorizontal: s(10) }}>
                  <div className="digit1 anim">
                    <Personal widthPersonal={'100%'} height={500} />
                  </div>
                  <div className="digit2 anim">
                    <Generic widthGeneric={'100%'} height={500} />
                  </div>
                  <div className="digit3 anim">
                    <Spiritual widthSpiritual={'100%'} height={500} />
                  </div>
                </View>
              )}
            </>
          )}
        </>
      )
    }
  }

  const Purpose = ({ startY, endY, location1, location2, location3 }: any) => {
    return (
      <div id="purpose" className="polaraCSS">
        <View
          style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center' }}
          onLayout={event => {
            const { layout } = event.nativeEvent
            const blocksY = store.getState().app.blocksY
            dispatch(setBlocksY({ ...blocksY, method: layout.y }))
          }}>
          <View
            // @ts-ignore
            style={styles.mainView}>
            <View
              // @ts-ignore
              style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
              <View
                // @ts-ignore
                style={styles.titleView}>
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
                  КУРС «ПРЕДНАЗНАЧЕНИЕ»
                </div>
              </View>
              <div id="trigger1" />
              <View
                id="animate1"
                // @ts-ignore
                style={styles.blockText}>
                <View
                  // @ts-ignore
                  style={styles.textView}>
                  <div
                    style={{
                      width: '100%',
                      // opacity: 0.8,
                      textAlign: 'justify',
                      color: 'white',
                      fontSize: 16,
                      fontFamily: 'InterRegular',
                      fontWeight: '400',
                      wordWrap: 'break-word'
                    }}>
                    Предназначение – это энергия человека, то, чем он обладает на физическом и духовном уровне для раскрытия своих талантов, усовершенствования навыков, раскрытия потенциала его
                    личности и понимание на что он способен. Использование этой энергии по назначению приводит к тому, что человек получает то, что ему нужно, его мечты, желания и идеи воплощаются в
                    реальности. Это не просто возможность заниматься тем, что ему нравится, это призвание, которым мы делимся с другими людьми. Это путь, который определяется для каждого в момент его
                    рождения. Это дорога, которую нужно пройти от начала и до конца, при этом накопив знания, набравшись опыта и не растратив энергию своей Души.
                  </div>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: s(20) }}>
                  {isMobile && isPortrait ? (
                    <View
                      // @ts-ignore
                      style={[styles.price, { marginTop: isMobile ? s(30) : s(20), flexDirection: 'column' }]}>
                      {/*<AppButton type={'white'} title={'Приобрести курс'} press={() => {}} />*/}
                      {/*<View style={{ height: s(10) }} />*/}
                      <AppButton
                        type={'gradient'}
                        title={'Подробнее'}
                        press={() =>
                          dispatch(
                            setModalMore({
                              viewModal: true,
                              typeModal: 'purpose'
                            })
                          )
                        }
                      />
                      <View style={{ height: s(10) }} />
                      <AppButton type={'white'} title={'Приобрести курс частями'} press={() => setCollapsed(!collapsed)} />
                      <View style={{ height: s(10) }} />
                    </View>
                  ) : (
                    <View
                      // @ts-ignore
                      style={styles.price}>
                      {/*<AppButton type={'white'} title={'Приобрести курс'} press={() => {}} />*/}
                      {/*<View style={{ width: Dimensions.get('window').width < 800 ? undefined : s(10), height: Dimensions.get('window').width < 800 ? s(10) : undefined }} />*/}
                      <AppButton
                        type={'gradient'}
                        title={'Подробнее'}
                        press={() =>
                          dispatch(
                            setModalMore({
                              viewModal: true,
                              typeModal: 'purpose'
                            })
                          )
                        }
                      />
                      {/*<View style={{ height: s(10) }} />*/}
                      {/*<AppButton type={'white'} title={'Приобрести курс частями'} press={() => setCollapsed(!collapsed)} />*/}
                    </View>
                  )}
                </View>
                <View style={{ height: s(15) }} />
              </View>
              <View
                style={{ width: '100%' }}
                onLayout={event => {
                  const { layout } = event.nativeEvent
                  setWidthBlock(layout.width)
                }}>
                <MobileBlock />
              </View>
              <View style={{ height: s(20) }} />
              {/*</View>*/}
            </View>
          </View>
        </View>
      </div>
    )
  }

  // {!collapsed && (
  //               <View
  //                 // @ts-ignore
  //                 style={styles.courses}>
  //                 <View style={{ marginTop: s(30) }} />
  //
  //                 <View style={{ marginTop: s(10) }} />
  //
  //                 <View style={{ marginTop: s(10) }} />
  //                 <View
  //                   // @ts-ignore
  //                   style={styles.blockModule}>
  //                   <View style={{ marginTop: s(5), alignItems: 'center' }}>
  //                     <div
  //                       style={{
  //                         marginTop: s(6),
  //                         width: '100%',
  //                         opacity: 0.6,
  //                         textAlign: 'center',
  //                         color: '#F6F6F6',
  //                         fontSize: s(15),
  //                         fontFamily: 'Forum',
  //                         fontWeight: '400',
  //                         wordWrap: 'break-word'
  //                       }}>
  //                       3 модуль
  //                     </div>
  //                     <div
  //                       style={{
  //                         marginTop: s(10),
  //                         width: '100%',
  //                         textAlign: 'center',
  //                         color: '#F3F3F3',
  //                         fontSize: s(17),
  //                         fontFamily: 'KreadonRegular',
  //                         fontWeight: '330',
  //                         textTransform: 'uppercase',
  //                         wordWrap: 'break-word'
  //                       }}>
  //                       ДУХОВНОЕ ПРЕДНАЗНАЧЕНИЕ
  //                     </div>
  //                   </View>
  //                   <View
  //                     // @ts-ignore
  //                     style={styles.textView}>
  //                     <div
  //                       style={{
  //                         width: '100%',
  //                         opacity: 0.8,
  //                         textAlign: 'justify',
  //                         color: 'white',
  //                         fontSize: s(12),
  //                         fontFamily: 'InterRegular',
  //                         fontWeight: '400',
  //                         wordWrap: 'break-word'
  //                       }}>
  //                       Духовное предназначение – это точка духовной гармонии, оно раскрывает смысл того, для чего вы сюда пришли, в этот мир, в эту материю. Именно оно приносит смысл в вашу жизнь!
  //                     </div>
  //                   </View>
  //                   <View style={{ marginTop: s(14), alignItems: 'center' }}>
  //                     <div
  //                       style={{
  //                         flex: '1 1 0',
  //                         opacity: 0.9,
  //                         textAlign: 'center',
  //                         color: '#F6F6F6',
  //                         fontSize: s(12),
  //                         fontFamily: 'Forum',
  //                         fontWeight: '400',
  //                         wordWrap: 'break-word'
  //                       }}>
  //                       ВНИМАНИЕ!!!
  //                       <br />
  //                       Необходимо пройти 1 и 2 модуль
  //                     </div>
  //                   </View>
  //                   <View style={{ marginTop: s(20), alignItems: 'center' }}>
  //                     <AppButton type={'gradient'} title={'Приобрести модуль'} press={() => {}} />
  //                     <View style={{ height: s(10) }} />
  //                     <AppButton
  //                       type={'transparent'}
  //                       title={'Программа модуля'}
  //                       press={() =>
  //                         dispach(
  //                           setModalMore({
  //                             viewModal: true,
  //                             typeModal: 'spiritual'
  //                           })
  //                         )
  //                       }
  //                     />
  //                   </View>
  //                   <Ellipse style={{ top: -2, left: -2 }} />
  //                   <Ellipse style={{ top: -2, right: -2 }} />
  //                   <Ellipse style={{ bottom: -2, left: -2 }} />
  //                   <Ellipse style={{ bottom: -2, right: -2 }} />
  //                   <View style={{ height: s(20) }} />
  //                 </View>
  //               </View>
  //             )}

  if (isMobile) {
    return <Purpose startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
  }

  return <Purpose startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
}

export default PurposeBlock
