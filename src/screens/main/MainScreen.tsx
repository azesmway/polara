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

// import { useGSAP } from '@gsap/react'
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
import RotateImg from 'components/ui/rotate'
import VideoBlock from 'components/video'
// import { gsap } from 'gsap'
// import { Draggable } from 'gsap/Draggable'
// import { EaselPlugin } from 'gsap/EaselPlugin'
// import { Flip } from 'gsap/Flip'
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
// import { Observer } from 'gsap/Observer'
// import { PixiPlugin } from 'gsap/PixiPlugin'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { TextPlugin } from 'gsap/TextPlugin'
import { useStyles } from 'hooks'
import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { ScrollView, View } from 'react-native'
// import { s } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import R from 'res'
// @ts-ignore
// import * as ScrollMagic from 'scrollmagic'
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import { RootState } from 'store'
import { setForm } from 'store/data'

// gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin)
// @ts-ignore
// ScrollMagicPluginGsap(ScrollMagic, gsap)
import stylesConfig from './MainScreen.styles'

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MainScreen = ({}) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  // const showMenu = useSelector((state: RootState) => state.app.showMenu)
  const modalReservation = useSelector((state: RootState) => state.app.modalReservation)
  const modalMaster = useSelector((state: RootState) => state.app.modalMaster)
  const modalMore = useSelector((state: RootState) => state.app.modalMore)
  const [collapsed, setCollapsed] = useState(true)

  const scrollRef = useRef(null)

  const scrollView = (position: number) => {
    // if (scrollRef && scrollRef.current) {
    //   // @ts-ignore
    //   scrollRef.current?.scrollTo({
    //     y: position,
    //     animated: true
    //   })
    // }
    // @ts-ignore
    // document.querySelector('your-class').scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    dispatch(
      setForm({
        name: '',
        telegram: '',
        phone: '',
        question: ''
      })
    )
  }, [])

  // contentContainerStyle={{ width: '100%', height: '100%', alignItems: 'center' }}
  if (isMobile) {
    return (
      <>
        {/*<div className="static">*/}
        <AppHeader scrollView={scrollView} scrollRef={scrollRef} />
        {/*</div>*/}
        <ScrollView ref={scrollRef} alwaysBounceHorizontal={false} alwaysBounceVertical={false} bounces={false} showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%' }}>
            <MainBlock scrollRef={scrollRef} />
            <MethodBlock />
            <PurposeBlock setCollapsed={setCollapsed} collapsed={collapsed} />
            <OtherBlock collapsed={collapsed} />
            <MasterBlock modalMaster={modalMaster.viewModal} />
            <VideoBlock />
            <QuestionBlock />
            <FooterBlock />
            <PolicyBlock />
          </View>
        </ScrollView>
        <MenuBlock scrollView={scrollView} scrollRef={scrollRef} />
        {modalReservation.viewModal ? <ModalBlock modalView={modalReservation.viewModal} modalType={'reservation'} modalName={modalReservation.typeModal} /> : <></>}
        {modalMaster.viewModal && <ModalBlock modalView={modalMaster.viewModal} modalType={'master'} modalName={modalMaster.typeModal} />}
        {modalMore.viewModal && <MoreModal modalView={modalMore.viewModal} modalType={modalMore.typeModal} />}
        <RotateImg />
      </>
    )
  }

  // contentContainerStyle={{ width: '100%', height: '100%', alignItems: 'center' }}
  return (
    <>
      <div className="static">
        <AppHeader scrollView={scrollView} scrollRef={scrollRef} />
      </div>
      <ScrollView ref={scrollRef} alwaysBounceHorizontal={false} alwaysBounceVertical={false} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%' }}>
          <MainBlock scrollRef={scrollRef} />
          <MethodBlock />
          <PurposeBlock setCollapsed={setCollapsed} collapsed={collapsed} />
          <OtherBlock collapsed={collapsed} />
          <MasterBlock modalMaster={modalMaster.viewModal} />
          <VideoBlock />
          <QuestionBlock />
          <FooterBlock />
          <PolicyBlock />
        </View>
      </ScrollView>
      <MenuBlock scrollView={scrollView} scrollRef={scrollRef} />
      {modalReservation.viewModal ? <ModalBlock modalView={modalReservation.viewModal} modalType={'reservation'} modalName={modalReservation.typeModal} /> : <></>}
      {modalMaster.viewModal && <ModalBlock modalView={modalMaster.viewModal} modalType={'master'} modalName={modalMaster.typeModal} />}
      {modalMore.viewModal && <MoreModal modalView={modalMore.viewModal} modalType={modalMore.typeModal} />}
      <RotateImg />
    </>
  )
}

export default MainScreen
