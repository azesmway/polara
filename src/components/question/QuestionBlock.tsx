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
import { isMobile, useMobileOrientation } from 'react-device-detect'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { API_TELEGRAM, TOKEN_TELEGRAM, USER_TELEGRAM, WIDTH_DESKTOP } from 'res/const'
import { store } from 'store'
import { setBlocksY, setModalMore } from 'store/data'

import QuestionForm from './form'
import stylesConfig from './QuestionBlock.styles'

type QuestionBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const QuestionBlock = ({}: QuestionBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('Отправить')
  const [error, setError] = useState(false)

  const { isPortrait } = useMobileOrientation()
  const { width, height } = useWindowDimensions()

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
    const w = width > WIDTH_DESKTOP ? WIDTH_DESKTOP : width

    return (
      <div id="contact" className="polaraCSS">
        <View
          // @ts-ignore
          style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center' }}
          onLayout={event => {
            const { layout } = event.nativeEvent
            const blocksY = store.getState().app.blocksY
            dispatch(setBlocksY({ ...blocksY, contact: layout.y }))
          }}>
          <View style={{ width: w }}>
            <View
              // @ts-ignore
              style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
              <View
                // @ts-ignore
                style={styles.block}>
                <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgb(12,25,58)', opacity: 0.7, borderRadius: s(10) }} />
                <View
                  // @ts-ignore
                  style={styles.title}>
                  <div
                    id="question"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      color: 'white',
                      fontSize: isMobile && isPortrait ? s(24) : isMobile && !isPortrait ? 38 : 42,
                      fontFamily: 'Forum',
                      fontWeight: '400',
                      textTransform: 'uppercase',
                      wordWrap: 'break-word'
                    }}>
                    Появились вопросы?
                  </div>
                  <div
                    style={{
                      marginTop: s(3),
                      width: '100%',
                      opacity: 0.8,
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 16,
                      fontFamily: 'InterRegular',
                      fontWeight: '300',
                      wordWrap: 'break-word'
                    }}>
                    Оставьте своё сообщение и мы свяжемся
                    <br />с вами в ближайшее время
                  </div>
                </View>
                <QuestionForm error={error} />
                <View style={{ marginTop: isMobile ? s(30) : s(20), marginHorizontal: s(20) }}>
                  <Text style={styles.text}>
                    {'Нажимая на кнопку «Отправить сообщение»,\nя соглашаюсь с условиями '}
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
                <View style={{ marginTop: isMobile ? s(20) : s(10), alignItems: 'center' }}>
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
                <View style={{ marginTop: isMobile ? s(20) : s(10), alignItems: 'center' }} />
              </View>
            </View>
          </View>
        </View>
      </div>
    )
  }

  if (isMobile) {
    return <Question startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
  }

  return <Question startY={0.9} endY={1.0} location1={0.1} location2={0.6} location3={0.9} />
}

export default QuestionBlock
