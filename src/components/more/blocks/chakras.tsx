import AppButton from 'components/ui/button'
import React from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const ChakrasBlock = ({ modalView }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: s(40), paddingHorizontal: s(20) }}>
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
        Чакральная система
      </div>
      <div
        style={{
          marginTop: s(4),
          width: '100%',
          color: '#061A43',
          fontSize: s(18),
          fontFamily: 'Forum',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}>
        Описание курса:
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
        Чакральная система имеет более, чем одно измерение - не только физическое, но и духовное. Чакры функционируют не только на физическом, психологическом и эмоциональном плане, но также имеют
        более тонкие аспекты. И если система полноценна, то все остальное будет тоже в порядке, все восстанавливающие и целительные процессы будут автоматически запущены и не только на уроне
        физического тела.
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
        Программа курса:
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
        1. Что такое чакральная система
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
        2. Как работаю чакры
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
        3. Расчёт энергий по чакрам
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
        4. Анализ состояния чакральной системы
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
        5. Балансировка работы чакральной системы
      </div>
      <View style={{ marginVertical: s(30), alignItems: 'center' }}>
        <AppButton
          type={'more'}
          title={'Приобрести курс'}
          press={() => {
            dispatch(setModalMore(!modalView))
          }}
        />
      </View>
    </View>
  )
}

export default ChakrasBlock
