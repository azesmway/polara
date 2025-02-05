/**
 * -----------------------------------------------------------------------
 *  Header      : MoreModal.tsx
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { BlurView } from 'expo-blur'
import { useStyles } from 'hooks'
import React, { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { Dimensions, Modal, ScrollView, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { setModalMore } from 'store/data'

import AzesmBlock from './blocks/azesm'
import ChakrasBlock from './blocks/chakras'
import ForecastBlock from './blocks/forecast'
import GenericBlock from './blocks/generic'
import MissionBlock from './blocks/mission'
import PersonalBlock from './blocks/personal'
import PolicyBlock from './blocks/policy'
import PurposeBlock from './blocks/purpose'
import SpiritualBlock from './blocks/spiritual'
import stylesConfig from './MoreModal.styles'

type MoreModalProps = {
  modalView: boolean
  modalType: string
}

const T = R.lang

const MoreModal = ({ modalView, modalType }: MoreModalProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const scrollRef = useRef(null)

  useEffect(() => {
    if ((modalType === 'purpose' || modalType === 'generic' || modalType === 'policy') && scrollRef && scrollRef.current) {
      setTimeout(() => {
        // @ts-ignore
        scrollRef.current.scrollTo({
          x: 0,
          y: 0,
          animated: false
        })
      }, 100)
    }
  }, [])

  let heightModal

  switch (modalType) {
    case 'personal':
      heightModal = isMobile ? s(580) : s(230)

      break
    case 'spiritual':
      heightModal = isMobile ? s(680) : s(250)

      break
    case 'generic':
      heightModal = isMobile ? s(680) : s(300)

      break
    case 'сhakras':
      heightModal = isMobile ? s(580) : s(210)

      break
    case 'mission':
      heightModal = isMobile ? s(420) : s(130)

      break
    case 'azesm':
      heightModal = isMobile ? s(250) : s(100)

      break
    case 'forecast':
      heightModal = isMobile ? s(250) : s(100)

      break
    default:
      heightModal = Dimensions.get('window').height - 30
  }

  return (
    <Modal visible={modalView} transparent={true} onDismiss={() => dispatch(setModalMore(!modalView))}>
      <BlurView intensity={40} tint={'dark'} style={{ flex: 1 }}>
        <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center', justifyContent: 'center', borderRadius: s(10) }}>
          <View
            style={{
              width: Dimensions.get('window').width > 1240 ? 1000 : Dimensions.get('window').width - 40,
              backgroundColor: 'rgb(12,25,58)',
              margin: isMobile ? s(10) : s(50),
              borderRadius: s(10),
              height: heightModal,
              borderWidth: 0.5,
              borderColor: 'rgb(96,128,200)'
            }}>
            <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} scrollEnabled={true}>
              {modalType === 'purpose' && <PurposeBlock modalView={modalView} styles={styles} />}
              {modalType === 'personal' && <PersonalBlock modalView={modalView} styles={styles} />}
              {modalType === 'generic' && <GenericBlock modalView={modalView} styles={styles} />}
              {modalType === 'spiritual' && <SpiritualBlock modalView={modalView} styles={styles} />}
              {modalType === 'сhakras' && <ChakrasBlock modalView={modalView} styles={styles} />}
              {modalType === 'mission' && <MissionBlock modalView={modalView} styles={styles} />}
              {modalType === 'azesm' && <AzesmBlock modalView={modalView} styles={styles} />}
              {modalType === 'policy' && <PolicyBlock modalView={modalView} styles={styles} />}
              {modalType === 'forecast' && <ForecastBlock modalView={modalView} styles={styles} />}
            </ScrollView>
            <View
              // @ts-ignore
              style={styles.close}>
              <TouchableOpacity onPress={() => dispatch(setModalMore(!modalView))}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      /* eslint-disable-next-line max-len */
                      d="M6.15398 6.15374C6.31219 5.99573 6.52664 5.90698 6.75023 5.90698C6.97383 5.90698 7.18828 5.99573 7.34648 6.15374L20.8465 19.6537C20.9294 19.731 20.9959 19.8241 21.042 19.9276C21.0881 20.0311 21.1129 20.1429 21.1149 20.2562C21.1169 20.3694 21.0961 20.482 21.0536 20.587C21.0112 20.6921 20.948 20.7875 20.8679 20.8677C20.7878 20.9478 20.6923 21.0109 20.5873 21.0534C20.4822 21.0958 20.3697 21.1167 20.2564 21.1147C20.1431 21.1127 20.0314 21.0879 19.9279 21.0417C19.8244 20.9956 19.7312 20.9291 19.654 20.8462L6.15398 7.34624C5.99598 7.18804 5.90723 6.97358 5.90723 6.74999C5.90723 6.5264 5.99598 6.31194 6.15398 6.15374Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      /* eslint-disable-next-line max-len */
                      d="M20.8467 6.15374C21.0047 6.31194 21.0934 6.5264 21.0934 6.74999C21.0934 6.97358 21.0047 7.18804 20.8467 7.34624L7.34669 20.8462C7.18674 20.9953 6.97519 21.0764 6.7566 21.0726C6.53801 21.0687 6.32945 20.9802 6.17486 20.8256C6.02027 20.671 5.93172 20.4624 5.92787 20.2438C5.92401 20.0252 6.00515 19.8137 6.15419 19.6537L19.6542 6.15374C19.8124 5.99573 20.0268 5.90698 20.2504 5.90698C20.474 5.90698 20.6885 5.99573 20.8467 6.15374Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  )
}

export default MoreModal
