import AppButton from 'components/ui/button'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const PersonalBlock = ({ modalView, styles }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: isMobile ? s(40) : s(10), paddingHorizontal: isMobile ? s(20) : s(15) }}>
      <div style={styles.moduleTitle}>1 модуль</div>
      <div style={styles.moduleName}>ЛИЧНОЕ ПРЕДНАЗНАЧЕНИЕ</div>
      <div style={styles.subtitle}>Описание модуля:</div>
      <div style={styles.moduleSubject}>
        Дата, месяц и год рождения – это коды Судьбы и определенные энергии созвучные с человеком. Они влияют на всю его жизнь и являются базой на протяжении всего пути на это воплощение, в
        определенны период времени ставя задачи и помогая их решить.
      </div>
      <div style={styles.moduleProgram}>
        <Text style={[styles.moduleProgram, { textDecoration: 'underline' }]}>Программа блока:</Text>
      </div>
      <div style={styles.textBlockName}>1. Четыре уровня предназначений человека</div>
      <div style={styles.textBlockName}>2. Расчет Личного предназначения</div>
      <div style={styles.textBlockName}>3. Ключ Личного предназначения</div>
      <div style={styles.textBlockName}>4. Расшифровка 22 энергий (кодов Судьбы)</div>
      <div style={styles.textBlockName}>5. Проявление энергий в минусе</div>
      <div style={styles.textBlockName}>6. Расшифровка ключей Личного предназначения</div>
      <View style={{ marginVertical: isMobile ? s(30) : s(20), alignItems: 'center' }}>
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
