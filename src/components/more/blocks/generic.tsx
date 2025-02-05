import AppButton from 'components/ui/button'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const GenericBlock = ({ modalView, styles }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: isMobile ? s(40) : s(10), paddingHorizontal: isMobile ? s(20) : s(15) }}>
      <div style={styles.moduleTitle}>2 модуль</div>
      <div style={styles.moduleName}>РОДОВОЕ ПРЕДНАЗНАЧЕНИЕ</div>
      <div style={styles.subtitle}>Описание модуля:</div>
      <div style={styles.moduleSubject}>
        Понимание и работа с Родом меняет не только жизнь самого человека, но и жизнь ваших родных, а также дальних родственников, что в итоге приносит блага всей Родовой системе и открывает доступ к
        Силе Рода. Закрываются негативные родовые программы ваших предков минимум на 7 колен Рода и открывается путь вам и вашим потомкам к потенциалу в социальной реализации, улучшается сфера
        отношений в семье и с другими людьми, что ведет вас к благополучию, в том числе в материальной сфере. Вы получаете доступ к талантам и колоссальному наработанному опыту обоих Родов. Идти с
        поддержкой и силой Родов или без неё – это две разные возможности в реализации ваших задач и талантов. Вы приобретаете более глубинный смысл жизни, выправляются жизненные ситуации, исцеляется
        энергетика и карма Родов. Род – это одна из основ нашего Бытия, и мы пришли в свой Род в том числе, чтобы завершить миссию Рода.
      </div>
      <div style={styles.moduleProgram}>
        <Text style={[styles.moduleProgram, { textDecoration: 'underline' }]}>Программа блока:</Text>
      </div>
      <div style={styles.textBlockName}>1. Что из себя представляет Родовая система</div>
      <div style={styles.textBlockName}>2. Расчет Родового (Социального) предназначения, ключа Рода</div>
      <div style={styles.textBlockName}>3. Расшифровка ключей Рода</div>
      <div style={styles.textBlockName}>4. Ошибка по Роду матери и Роду отца (повторяющие программы)</div>
      <div style={styles.textBlockName}>5. Родовая фамилия для женщин и для мужчин</div>
      <div style={styles.textBlockName}>6. Типы и задачи Рода</div>
      <div style={styles.textBlockName}>7. Родовые эгрегоры</div>
      <div style={styles.textBlockName}>8. Родовая программы на воплощение</div>
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

export default GenericBlock
