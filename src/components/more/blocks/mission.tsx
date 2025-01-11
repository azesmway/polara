import AppButton from 'components/ui/button'
import React from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore, setModalReservation } from 'store/data'

const MissionBlock = ({ modalView }: any) => {
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
        Миссия человека — 12 энергий, 12 ключей
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
        12 типов энергий, в которых закладываются врожденные основные качества человека, такие как набор глубинных принципов, таланты и задачи личности. Все эти энергии – это разные принципы
        Мироздания, накопление определенных свойств за множество воплощений, а также проявленная индивидуальная основа (суть) личности на данное воплощение. Это мотивация, которой человек
        руководствуется – для чего он делает что-то в этой жизни, а также стратегия и инструменты для реализации своей Миссии.
      </div>
      <View style={{ marginVertical: s(30), alignItems: 'center' }}>
        <AppButton
          type={'more'}
          title={'Забронировать'}
          press={() => {
            dispatch(setModalMore(!modalView))
            dispatch(
              setModalReservation({
                viewModal: true,
                typeModal: 'КУРС: Миссия человека — 12 энергий, 12 ключей'
              })
            )
          }}
        />
      </View>
    </View>
  )
}

export default MissionBlock
