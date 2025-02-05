import AppButton from 'components/ui/button'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore, setModalReservation } from 'store/data'

const ForecastBlock = ({ modalView, styles }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: isMobile ? s(40) : s(10), paddingHorizontal: isMobile ? s(20) : s(15) }}>
      <div style={styles.moduleName}>Прогнозирование</div>
      <div style={styles.subtitle}>Описание курса:</div>
      <div style={styles.moduleSubject} />
      <View style={{ marginVertical: isMobile ? s(30) : s(15), alignItems: 'center' }}>
        <AppButton
          type={'more'}
          title={'Забронировать'}
          press={() => {
            dispatch(setModalMore(!modalView))
            dispatch(
              setModalReservation({
                viewModal: true,
                typeModal: 'КУРС: Прогнозирование'
              })
            )
          }}
        />
      </View>
    </View>
  )
}

export default ForecastBlock
