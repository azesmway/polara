import AppButton from 'components/ui/button'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const SpiritualBlock = ({ modalView, styles }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: isMobile ? s(40) : s(10), paddingHorizontal: isMobile ? s(20) : s(15), borderRadius: s(10) }}>
      <div style={styles.moduleTitle}>3 модуль</div>
      <div style={styles.moduleName}>ДУХОВНОЕ ПРЕДНАЗНАЧЕНИЕ</div>
      <div style={styles.subtitle}>Описание модуля:</div>
      <div style={styles.moduleSubject}>
        Духовное предназначение – это точка духовной гармонии, оно раскрывает смысл того, для чего вы сюда пришли, в этот мир, в эту материю. Именно оно приносит смысл в вашу жизнь! И когда человек
        выполняет свое личное и родовое предназначения, то духовное предназначение может прийти ему бонусом в плюсе в 60 лет, хотя эти энергии работают на протяжении всей жизни человека и к их
        реализации человек может приступить гораздо раньше. Однако, в зрелом возрасте духовное предназначение откроется для человека либо в плюс - как вознаграждение, либо в минус – как наказание.
      </div>
      <div style={styles.moduleProgram}>
        <Text style={[styles.moduleProgram, { textDecoration: 'underline' }]}>Программа блока:</Text>
      </div>
      <div style={styles.textBlockName}>1. Личное духовное предназначение (ЛДП)</div>
      <div style={styles.textBlockName}>2. Духовное предназначение (ДП)</div>
      <div style={styles.textBlockName}>3. Духовные задачи (ДЗ)</div>
      <div style={styles.textBlockName}>4. Ключ личной силы человека (КЛС)</div>
      <div style={styles.textBlockName}>5. Центр силы человека (ЦС)</div>
      <div style={styles.textBlockName}>6. Код целостной силы человека (КЦС), его глобальные проекты</div>
      <View style={{ marginVertical: isMobile ? s(30) : s(15), alignItems: 'center' }}>
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
