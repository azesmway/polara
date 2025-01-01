import AppButton from 'components/ui/button'
import React from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const PurposeBlock = ({ modalView }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: s(40), paddingHorizontal: s(20) }}>
      <div
        style={{
          width: '100%',
          color: '#061A43',
          fontSize: s(24),
          fontFamily: 'Forum',
          fontWeight: '400',
          textTransform: 'uppercase',
          wordWrap: 'break-word'
        }}>
        КУРС «ПРЕДНАЗНАЧЕНИЕ»
      </div>
      <div
        style={{
          width: '100%',
          color: '#061A43',
          fontSize: s(17),
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
        Предназначение – это энергия человека, то, чем он обладает на физическом и духовном уровне для раскрытия своих талантов, усовершенствования навыков, раскрытия потенциала его личности и
        понимание на что он способен. Использование этой энергии по назначению приводит к тому, что человек получает то, что ему нужно, его мечты, желания и идеи воплощаются в реальности. Это не
        просто возможность заниматься тем, что ему нравится, это призвание, которым мы делимся с другими людьми. Это путь, который определяется для каждого в момент его рождения. Это дорога, которую
        нужно пройти от начала и до конца, при этом накопив знания, набравшись опыта и не растратив энергию своей Души.
      </div>
      <div
        style={{
          marginTop: s(30),
          width: '100%',
          color: '#061A43',
          fontSize: s(17),
          fontFamily: 'Forum',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}>
        Программа курса:
      </div>

      <View style={{ marginTop: s(30) }}>
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
      </View>

      <View style={{ marginTop: s(30) }}>
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
          Понимание и работа с Родом меняет не только жизнь самого человека, но и жизнь ваших родных, а также дальних родственников, что в итоге приносит блага всей Родовой системе и открывает доступ
          к Силе Рода. Закрываются негативные родовые программы ваших предков минимум на 7 колен Рода и открывается путь вам и вашим потомкам к потенциалу в социальной реализации, улучшается сфера
          отношений в семье и с другими людьми, что ведет вас к благополучию, в том числе в материальной сфере. Вы получаете доступ к талантам и колоссальному наработанному опыту обоих Родов. Идти с
          поддержкой и силой Родов или без неё – это две разные возможности в реализации ваших задач и талантов. Вы приобретаете более глубинный смысл жизни, выправляются жизненные ситуации,
          исцеляется энергетика и карма Родов. Род – это одна из основ нашего Бытия, и мы пришли в свой Род в том числе, чтобы завершить миссию Рода.
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
      </View>

      <View style={{ marginTop: s(30) }}>
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
            title={'Приобрести курс'}
            press={() => {
              dispatch(setModalMore(!modalView))
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default PurposeBlock
