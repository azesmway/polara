import AppButton from 'components/ui/button'
import React from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const SpiritualBlock = ({ modalView }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: s(40), paddingHorizontal: s(20), borderRadius: s(10) }}>
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
        3 модуль
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
        ДУХОВНОЕ ПРЕДНАЗНАЧЕНИЕ
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
        Духовное предназначение – это точка духовной гармонии, оно раскрывает смысл того, для чего вы сюда пришли, в этот мир, в эту материю. Именно оно приносит смысл в вашу жизнь! И когда человек
        выполняет свое личное и родовое предназначения, то духовное предназначение может прийти ему бонусом в плюсе в 60 лет, хотя эти энергии работают на протяжении всей жизни человека и к их
        реализации человек может приступить гораздо раньше. Однако, в зрелом возрасте духовное предназначение откроется для человека либо в плюс - как вознаграждение, либо в минус – как наказание.
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
        1. Личное духовное предназначение (ЛДП)
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
        2. Духовное предназначение (ДП)
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
        3. Духовные задачи (ДЗ)
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
        4. Ключ личной силы человека (КЛС)
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
        5. Центр силы человека (ЦС)
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
        6. Код целостной силы человека (КЦС), его глобальные проекты
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

export default SpiritualBlock
