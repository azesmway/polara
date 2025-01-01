import AppButton from 'components/ui/button'
import { BlurView } from 'expo-blur'
import React from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const PersonalBlock = ({ modalView }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: s(40), paddingHorizontal: s(20) }}>
      <div
        style={{
          width: '100%',
          opacity: 0.6,
          color: '#061A43',
          fontSize: s(16),
          fontFamily: 'Forum',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}>
        1 модуль
      </div>
      <div
        style={{
          marginTop: s(10),
          color: '#061A43',
          fontSize: s(18),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word'
        }}>
        ЛИЧНОЕ ПРЕДНАЗНАЧЕНИЕ
      </div>
      <div
        style={{
          marginTop: s(20),
          width: '100%',
          opacity: 0.8,
          textAlign: 'justify',
          color: '#061A43',
          fontSize: s(12),
          fontFamily: 'InterRegular',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}>
        Дата, месяц и год рождения – это коды Судьбы и определенные энергии созвучные с человеком. Они влияют на всю его жизнь и являются базой на протяжении всего пути на это воплощение, в
        определенны период времени ставя задачи и помогая их решить.
      </div>
      <div
        style={{
          marginTop: s(20),
          width: '100%',
          color: '#061A43',
          fontSize: s(17),
          fontFamily: 'Forum',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}>
        Программа блока:
      </div>
      <div
        style={{
          marginTop: s(10),
          width: '100%',
          color: '#061A43',
          fontSize: s(16),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word',
          paddingLeft: 10
        }}>
        1. Четыре уровня предназначений человека
      </div>
      <div
        style={{
          marginTop: s(10),
          width: '100%',
          color: '#061A43',
          fontSize: s(16),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word',
          paddingLeft: 10
        }}>
        2. Расчет Личного предназначения
      </div>
      <div
        style={{
          marginTop: s(10),
          width: '100%',
          color: '#061A43',
          fontSize: s(16),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word',
          paddingLeft: 10
        }}>
        3. Ключ Личного предназначения
      </div>
      <div
        style={{
          marginTop: s(10),
          width: '100%',
          color: '#061A43',
          fontSize: s(16),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word',
          paddingLeft: 10
        }}>
        4. Расшифровка 22 энергий (кодов Судьбы)
      </div>
      <div
        style={{
          marginTop: s(10),
          width: '100%',
          color: '#061A43',
          fontSize: s(16),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word',
          paddingLeft: 10
        }}>
        5. Проявление энергий в минусе
      </div>
      <div
        style={{
          marginTop: s(10),
          width: '100%',
          color: '#061A43',
          fontSize: s(16),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word',
          paddingLeft: 10
        }}>
        6. Расшифровка ключей Личного предназначения
      </div>
      <View style={{ marginVertical: s(30), alignItems: 'center' }}>
        <AppButton
          type={'more'}
          title={'Приобрести модуль'}
          press={() => {
            dispatch(setModalMore(!modalView))
          }}
        />
      </View>
    </View>
  )
}

export default PersonalBlock
