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
import AppButton from 'components/ui/button'
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { API_TELEGRAM, TOKEN_TELEGRAM, USER_TELEGRAM } from 'res/const.ts'
import { setModalMore } from 'store/data'

import QuestionForm from './form'
import stylesConfig from './QuestionBlock.styles'
import {store} from "store";

type QuestionBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const QuestionBlock = ({}: QuestionBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })
  const [title, setTitle] = useState('Отправить')
  const [error, setError] = useState(false)

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

  const sendMessage = () => {
    const form = store.getState().app.form

    if (form.name === '' || form.telegram === '' || form.phone === '' || form.question === '') {
      setError(true)

      return
    }

    const telegramNik = Array.from(form.telegram)[0] !== '@' ? '@' + form.telegram : form.telegram
    const msg = encodeURI('ВОПРОС С САЙТА' + '\n' + 'Имя: ' + form.name + '\n' + 'Ник в telegram: ' + telegramNik + '\n' + 'Телефон: +' + form.phone + '\n' + 'Вопрос: +' + form.question)
    const url = API_TELEGRAM + TOKEN_TELEGRAM + '/sendMessage?chat_id=' + USER_TELEGRAM + '&text=' + msg

    fetch(url).then(response => {
      if (response.ok && response.status === 200) {
        setTitle('Сообщение отправлено')

        setTimeout(() => {
          setTitle('Отправить')
        }, 10000)
      } else {
        // @ts-ignore
        alert('Ошибка! Не удалось отправить сообщение!')
      }
    })
  }

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
            <QuestionForm error={error} />
            <View style={{ marginTop: s(20), marginHorizontal: s(20) }}>
              <Text style={styles.text}>
                {'Нажимая на кнопку «Отправить сообщение», я соглашаюсь с условиями '}
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      setModalMore({
                        viewModal: true,
                        typeModal: 'policy'
                      })
                    )
                  }}>
                  <Text style={[styles.text, { textDecoration: 'underline' }]}>{'политики конфиденциальности'}</Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View style={{ marginTop: s(40), alignItems: 'center' }}>
              <AppButton
                type={'gradient'}
                title={title}
                press={() => {
                  if (title === 'Отправить') {
                    sendMessage()
                  }
                }}
                disabled={title !== 'Отправить'}
              />
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
