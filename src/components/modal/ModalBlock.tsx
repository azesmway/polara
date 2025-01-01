/**
 * -----------------------------------------------------------------------
 *  Header      : ModalBlock.tsx
 *  Created     : 30.12.2024
 *  Modified    : 30.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import AppButton from 'components/ui/button'
import { BlurView } from 'expo-blur'
import { useStyles } from 'hooks'
import React, { useState } from 'react'
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskInput from 'react-native-mask-input'
import { TextInput as PTextInput } from 'react-native-paper'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { setModalMaster, setModalReservation } from 'store/data'

import stylesConfig from './ModalBlock.styles'

type ModalBlockProps = {
  modalView: boolean
  modalType: string
}

const T = R.lang

const ModalBlock = ({ modalView, modalType }: ModalBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [telegram, setTelegram] = useState('')
  const [phone, setPhone] = useState('')

  const dismissModal = modalType === 'reservation' ? setModalReservation : setModalMaster
  const txt = modalType === 'reservation' ? 'Забронировать' : 'Записаться'

  return (
    <Modal visible={modalView} transparent={true} onDismiss={() => dispatch(dismissModal(!modalView))}>
      <BlurView intensity={40} tint={'dark'} style={{ flex: 1, alignItems: 'center', paddingTop: s(60) }}>
        <LinearGradient
          start={{ x: 0.0, y: 0.9 }}
          end={{ x: 1.0, y: 1.0 }}
          locations={[0.2, 0.8, 1.0]}
          colors={['#061A43', 'rgba(28,47,79,1)', 'rgba(36,60,87,1)']}
          // @ts-ignore
          style={styles.gradient}>
          <View
            // @ts-ignore
            style={styles.modal}>
            <View
              // @ts-ignore
              style={styles.close}>
              <TouchableOpacity onPress={() => dispatch(dismissModal(!modalView))}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
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
                  </g>
                </svg>
              </TouchableOpacity>
            </View>
            {modalType === 'reservation' ? (
              <View style={{ marginTop: s(40), alignItems: 'center' }}>
                <div
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
                  Забронировать курс
                </div>
              </View>
            ) : (
              <View style={{ marginTop: s(40), alignItems: 'center' }}>
                <div
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
                  Записаться
                  <br />
                  на мастер-класс
                </div>
              </View>
            )}
            <View style={{ marginTop: s(20), alignItems: 'center' }}>
              <div
                style={{
                  width: '100%',
                  opacity: 0.8,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: s(12),
                  fontFamily: 'InterRegular',
                  fontWeight: '400',
                  wordWrap: 'break-word'
                }}>
                Оставьте своё сообщение и мы
                <br />
                свяжемся с вами в ближайшее время
              </div>
            </View>
            <View style={{ marginTop: s(30), marginHorizontal: s(20) }}>
              <TextInput value={name} placeholder={'Имя *'} placeholderTextColor={'#9e9e9e'} style={styles.textInput} onChangeText={txt => setName(txt)} />
              <View style={{ height: s(5) }} />
              <TextInput value={telegram} placeholder={'Ник в telegram *'} placeholderTextColor={'#9e9e9e'} style={styles.textInput} onChangeText={txt => setTelegram(txt)} />
              <PTextInput
                style={styles.textInput}
                autoCapitalize={'none'}
                autoCorrect={false}
                render={props => {
                  return (
                    <MaskInput
                      // @ts-ignore
                      value={phone}
                      onChangeText={(masked, unmasked) => {
                        setPhone('7' + unmasked)
                      }}
                      mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                      style={styles.inputMask}
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      keyboardType={'numeric'}
                      placeholder={'+7 (___) ___-__-___ *'}
                      placeholderTextColor={'#9e9e9e'}
                    />
                  )
                }}
              />
            </View>
            <View style={{ marginTop: s(20), marginHorizontal: s(20) }}>
              <Text style={styles.text}>
                {'Нажимая на кнопку «' + txt + '»,\nя соглашаюсь с условиями '}
                <TouchableOpacity onPress={() => {}}>
                  <Text style={[styles.text, { textDecoration: 'underline' }]}>{'политики конфиденциальности'}</Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View style={{ marginTop: s(40), alignItems: 'center' }}>
              {modalType === 'reservation' ? <AppButton type={'gradient'} title={'Забронировать'} press={() => {}} /> : <AppButton type={'gradient'} title={'Записаться'} press={() => {}} />}
            </View>
          </View>
        </LinearGradient>
      </BlurView>
    </Modal>
  )
}

export default ModalBlock
