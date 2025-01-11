import AppButton from 'components/ui/button'
import React from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const GenericBlock = ({ modalView }: any) => {
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
        2 модуль
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
        РОДОВОЕ ПРЕДНАЗНАЧЕНИЕ
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
        Описание модуля:
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
        Понимание и работа с Родом меняет не только жизнь самого человека, но и жизнь ваших родных, а также дальних родственников, что в итоге приносит блага всей Родовой системе и открывает доступ к
        Силе Рода. Закрываются негативные родовые программы ваших предков минимум на 7 колен Рода и открывается путь вам и вашим потомкам к потенциалу в социальной реализации, улучшается сфера
        отношений в семье и с другими людьми, что ведет вас к благополучию, в том числе в материальной сфере. Вы получаете доступ к талантам и колоссальному наработанному опыту обоих Родов. Идти с
        поддержкой и силой Родов или без неё – это две разные возможности в реализации ваших задач и талантов. Вы приобретаете более глубинный смысл жизни, выправляются жизненные ситуации, исцеляется
        энергетика и карма Родов. Род – это одна из основ нашего Бытия, и мы пришли в свой Род в том числе, чтобы завершить миссию Рода.
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
        1. Что из себя представляет Родовая система
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
        2. Расчет Родового (Социального) предназначения, ключа Рода
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
        3. Расшифровка ключей Рода
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
        4. Ошибка по Роду матери и Роду отца (повторяющие программы)
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
        5. Родовая фамилия для женщин и для мужчин
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
        6. Типы и задачи Рода
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
        7. Родовые эгрегоры
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
        8. Родовая программы на воплощение
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

export default GenericBlock
