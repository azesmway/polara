/**
 * -----------------------------------------------------------------------
 *  Header      : QuestionBlock.tsx
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskInput from 'react-native-mask-input'
import { TextInput as PTextInput } from 'react-native-paper'
import { s } from 'react-native-size-matters'
import R from 'res'

import stylesConfig from './QuestionBlock.styles'
import AppButton from "components/ui/button";

type QuestionBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const QuestionBlock = ({}: QuestionBlockProps) => {
  const styles = useStyles(stylesConfig)
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })
  const [name, setName] = useState('')
  const [telegram, setTelegram] = useState('')
  const [phone, setPhone] = useState('')
  const [question, setQuestion] = useState('')

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

  const Question = ({ startY, endY, location1, location2, location3 }: any) => {
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
                Появились вопросы?
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
                Оставьте своё сообщение и мы свяжемся
                <br />с вами в ближайшее время
              </div>
            </View>
            <View style={{ marginTop: s(30), marginHorizontal: s(20) }}>
              <TextInput value={name} placeholder={'Имя *'} placeholderTextColor={'#9e9e9e'} style={styles.textInput} onChangeText={txt => setName(txt)} />
              <View style={{ height: s(5) }} />
              <TextInput value={telegram} placeholder={'Ник в telegram через @ *'} placeholderTextColor={'#9e9e9e'} style={styles.textInput} onChangeText={txt => setTelegram(txt)} />
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
              <View style={{ height: s(5) }} />
              <TextInput value={question} placeholder={'Напишите вопрос'} placeholderTextColor={'#9e9e9e'} style={styles.textInput} onChangeText={txt => setQuestion(txt)} />
            </View>
            <View style={{ marginTop: s(20), marginHorizontal: s(20) }}>
              <Text style={styles.text}>
                {'Нажимая на кнопку «Отправить сообщение», я соглашаюсь с условиями '}
                <TouchableOpacity onPress={() => {}}>
                  <Text style={[styles.text, { textDecoration: 'underline' }]}>{'политики конфиденциальности'}</Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View style={{ marginTop: s(40), alignItems: 'center' }}>
              <AppButton type={'gradient'} title={'Отправить'} press={() => {}} />
            </View>
          </View>
        </View>
      </LinearGradient>
    )
  }

  if (screenSize.width < 540) {
    return <Question startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
  }

  return <Question startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
}

export default QuestionBlock
