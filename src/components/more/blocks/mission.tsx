import AppButton from 'components/ui/button'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore, setModalReservation } from 'store/data'

const MissionBlock = ({ modalView, styles }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: isMobile ? s(40) : s(10), paddingHorizontal: isMobile ? s(20) : s(15) }}>
      <div style={styles.moduleName}>Миссия человека — 12 энергий, 12 ключей</div>
      <div style={styles.subtitle}>Описание курса:</div>
      <div style={styles.moduleSubject}>
        12 типов энергий, в которых закладываются врожденные основные качества человека, такие как набор глубинных принципов, таланты и задачи личности. Все эти энергии – это разные принципы
        Мироздания, накопление определенных свойств за множество воплощений, а также проявленная индивидуальная основа (суть) личности на данное воплощение. Это мотивация, которой человек
        руководствуется – для чего он делает что-то в этой жизни, а также стратегия и инструменты для реализации своей Миссии.
      </div>
      <View style={{ marginVertical: isMobile ? s(30) : s(15), alignItems: 'center' }}>
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
