/**
 * -----------------------------------------------------------------------
 *  Header      : MethodBlock.tsx
 *  Created     : 29.12.2024
 *  Modified    : 29.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { s } from 'react-native-size-matters'
import R from 'res'

import stylesConfig from './MethodBlock.styles'

type MethodBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MethodBlock = ({}: MethodBlockProps) => {
  const styles = useStyles(stylesConfig)
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })

  const updateDimensions = () => {
    // @ts-ignore
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('resize', updateDimensions)

    // @ts-ignore
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const Method = ({ startY, endY, location1, location2, location3 }: any) => {
    return (
      <LinearGradient
        start={{ x: 0.8, y: startY }}
        end={{ x: 1.0, y: endY }}
        locations={[location1, location2, location3]}
        colors={['#061A43', 'rgba(28,47,79,1)', 'rgba(31,57,92,1)']}
        // @ts-ignore
        style={styles.gradient}>
        <View
          // @ts-ignore
          style={styles.mainView}>
          <View
            // @ts-ignore
            style={styles.mainViewInSide}>
            <View
              // @ts-ignore
              style={styles.title}>
              <div
                id="method"
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: s(24),
                  fontFamily: 'Forum',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  wordWrap: 'break-word'
                }}>
                О методе
              </div>
            </View>
            <View
              // @ts-ignore
              style={styles.textView}>
              <div
                style={{
                  width: '100%',
                  opacity: 0.8,
                  textAlign: 'justify',
                  color: 'white',
                  fontSize: s(12),
                  fontFamily: 'InterRegular',
                  fontWeight: '400',
                  wordWrap: 'break-word'
                }}>
                Приветствую всех, кто задается вопросами самопознания и кому интересна тайна кода своего рождения! Дата рождения - это трехкодичная система ко всему проявленному и непроявленному в
                нас, это ключ к нашей жизни и инструкция, выданная нам при рождении.
                <br />
                <br />
                Инструмент, который я искала на протяжении нескольких лет, изучая многое для себя, а потом это просто стало частью моей жизни и не только моей, это мой авторский Метод самопознания
                «Полара», в котором я совместила нумерологию и сакральную геометрию.
                <br />
                <br />
                "Бог мыслит геометрически..." - эта фраза помогла мне найти направление, а Цветок жизни и цифры дали возможность перевести из мира тонких энергий в материальный мир знания на доступном
                языке - языке цифр. Хотя все в нашей жизни энергии, через энергию цифр это доступно и понятно каждому.
                <br />
                <br />
                Добро пожаловать в этот мир, мир познания себя и Вселенной через себя!
                <br />
                <br />И начнём мы с наших Предназначений.
              </div>
            </View>
            <View
              // @ts-ignore
              style={styles.fotoView}>
              <Image source={require('assets/images/foto.jpg')} style={styles.foto} />
            </View>
          </View>
        </View>
      </LinearGradient>
    )
  }

  if (screenSize.width < 540) {
    return <Method startY={0.9} endY={1.0} location1={0.3} location2={0.8} location3={0.9} />
  }

  return <Method startY={0.3} endY={0.0} location1={0.2} location2={0.7} location3={0.9} />
}

export default MethodBlock
