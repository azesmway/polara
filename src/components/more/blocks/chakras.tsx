import AppButton from 'components/ui/button'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { setModalMore } from 'store/data'

const ChakrasBlock = ({ modalView, styles }: any) => {
  const dispatch = useDispatch()

  return (
    <View style={{ marginTop: isMobile ? s(40) : s(10), paddingHorizontal: isMobile ? s(20) : s(15) }}>
      <div style={styles.moduleName}>Чакральная система</div>
      <div style={styles.subtitle}>Описание курса:</div>
      <div style={styles.moduleSubject}>
        Чакральная система имеет более, чем одно измерение - не только физическое, но и духовное. Чакры функционируют не только на физическом, психологическом и эмоциональном плане, но также имеют
        более тонкие аспекты. И если система полноценна, то все остальное будет тоже в порядке, все восстанавливающие и целительные процессы будут автоматически запущены и не только на уроне
        физического тела.
      </div>
      <div style={styles.moduleProgram}>
        <Text style={[styles.moduleProgram, { textDecoration: 'underline' }]}>Программа курса:</Text>
      </div>
      <div style={styles.textBlockName}>1. Что такое чакральная система</div>
      <div style={styles.textBlockName}>2. Как работаю чакры</div>
      <div style={styles.textBlockName}>3. Расчёт энергий по чакрам</div>
      <div style={styles.textBlockName}>4. Анализ состояния чакральной системы</div>
      <div style={styles.textBlockName}>5. Балансировка работы чакральной системы</div>
      <View style={{ marginVertical: isMobile ? s(30) : s(15), alignItems: 'center' }}>
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
