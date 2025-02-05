/**
 * -----------------------------------------------------------------------
 *  Header      : QuestionForm.tsx
 *  Created     : 02.01.2025
 *  Modified    : 02.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React from 'react'
import {isMobile, useMobileOrientation} from 'react-device-detect'
import { TextInput, View } from 'react-native'
import MaskInput from 'react-native-mask-input'
import { TextInput as PTextInput } from 'react-native-paper'
import { s } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import R from 'res'
import { RootState } from 'store'
import { setForm } from 'store/data'

import stylesConfig from './QuestionForm.styles'

type QuestionFormProps = {
  error: boolean
}

const T = R.lang

const QuestionForm = ({ error }: QuestionFormProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const form = useSelector((state: RootState) => state.app.form)
  const { isPortrait } = useMobileOrientation()

  if (!form) {
    dispatch(
      setForm({
        name: '',
        telegram: '',
        phone: '',
        question: ''
      })
    )

    return <></>
  }

  return (
    <View style={{ width: isMobile && isPortrait ? '100%' : isMobile && !isPortrait ? 600 : s(270), alignSelf: 'center' }}>
      <View style={{ marginTop: s(10), marginHorizontal: s(20) }}>
        <TextInput
          value={form.name}
          placeholder={'Имя *'}
          placeholderTextColor={error && form.name === '' ? '#FF3535' : '#9e9e9e'}
          style={[
            styles.textInput,
            {
              borderBottomColor: error && form.name === '' ? '#FF3535' : 'rgb(48,64,96)'
            }
          ]}
          onChangeText={txt =>
            dispatch(
              setForm({
                ...form,
                name: txt
              })
            )
          }
        />
        <View style={{ height: s(5) }} />
        <TextInput
          value={form.telegram}
          placeholder={'Ник в telegram через @ *'}
          placeholderTextColor={error && form.telegram === '' ? '#FF3535' : '#9e9e9e'}
          style={[
            styles.textInput,
            {
              borderBottomColor: error && form.telegram === '' ? '#FF3535' : 'rgb(48,64,96)'
            }
          ]}
          onChangeText={txt =>
            dispatch(
              setForm({
                ...form,
                telegram: txt
              })
            )
          }
        />
        <PTextInput
          style={[
            styles.textInput,
            {
              borderBottomColor: error && form.phone === '' ? '#FF3535' : 'rgb(48,64,96)'
            }
          ]}
          autoCapitalize={'none'}
          autoCorrect={false}
          render={props => {
            return (
              <MaskInput
                // @ts-ignore
                value={form.phone}
                onChangeText={(masked, unmasked) => {
                  dispatch(
                    setForm({
                      ...form,
                      phone: '7' + unmasked
                    })
                  )
                }}
                mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                style={styles.inputMask}
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'numeric'}
                placeholder={'+7 (___) ___-__-___ *'}
                placeholderTextColor={error && form.phone === '' ? '#FF3535' : '#9e9e9e'}
              />
            )
          }}
        />
        <View style={{ height: s(5) }} />
        <TextInput
          value={form.question}
          placeholder={'Напишите вопрос'}
          placeholderTextColor={error && form.question === '' ? '#FF3535' : '#9e9e9e'}
          style={[
            styles.textInput,
            {
              borderBottomColor: error && form.question === '' ? '#FF3535' : 'rgb(48,64,96)'
            }
          ]}
          onChangeText={txt =>
            dispatch(
              setForm({
                ...form,
                question: txt
              })
            )
          }
        />
      </View>
    </View>
  )
}

export default QuestionForm
