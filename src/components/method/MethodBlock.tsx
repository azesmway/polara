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
import React, { useMemo } from 'react'
import { isMobile, useMobileOrientation } from 'react-device-detect'
// @ts-ignore
import MovingText from 'react-moving-text'
import { Text, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { store } from 'store'
import { setBlocksY } from 'store/data'

import stylesConfig from './MethodBlock.styles'

type MethodBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MethodBlock = ({}: MethodBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const { isPortrait } = useMobileOrientation()
  const { width } = useWindowDimensions()
  // @ts-ignore
  const w = width > 1240 ? 1240 : width

  const Method = () => {
    return (
      <div id="about" className="polaraCSS">
        <View
          style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center' }}
          onLayout={event => {
            const { layout } = event.nativeEvent
            const blocksY = store.getState().app.blocksY
            dispatch(setBlocksY({ ...blocksY, about: layout.y }))
          }}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgb(12,25,58)',
              opacity: 0.3
            }}
          />
          <View style={{ width: w }}>
            <View
              // @ts-ignore
              style={[styles.blockView, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
              <View
                // @ts-ignore
                style={styles.mainView}>
                <MovingText type="fadeIn" duration="1000ms" delay="1s" direction="normal" timing="ease-in" iteration="1" fillMode="backwards">
                  <View
                    // @ts-ignore
                    style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(10) }]}>
                    <View
                      // @ts-ignore
                      style={styles.title}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: isMobile && isPortrait ? s(24) : isMobile && !isPortrait ? 38 : 42,
                          fontFamily: 'Forum',
                          fontWeight: '400',
                          textTransform: 'uppercase'
                        }}>
                        О методе
                      </Text>
                    </View>
                    {isMobile && isPortrait ? (
                      <View
                        // @ts-ignore
                        style={styles.textView}>
                        <div
                          style={{
                            width: '100%',
                            // opacity: 0.8,
                            textAlign: 'justify',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'InterRegular',
                            fontWeight: '400',
                            wordWrap: 'break-word'
                          }}>
                          <img
                            src="images/foto.jpg"
                            width={isMobile ? 148 : 240}
                            height={isMobile ? 180 : 300}
                            // @ts-ignore
                            style={{ float: 'left', margin: '0 20px 10px 0' }}
                            alt=""
                          />
                          Приветствую всех, кто задается вопросами самопознания и кому интересна тайна кода своего рождения!
                          <br />
                          <br />
                          Дата рождения - это трехкодичная система ко всему проявленному и непроявленному в нас, это ключ к нашей жизни и инструкция, выданная нам при рождении. Инструмент, который я
                          искала на протяжении нескольких лет, изучая многое для себя, стал частью не только моей жизни, но авторским методом самопознания «Полара», в котором я совместила нумерологию
                          и сакральную геометрию.
                          <br />
                          <br />
                          "Бог мыслит геометрически..." - эта фраза помогла мне найти направление, а Цветок жизни и Цифры дали возможность перевести из мира тонких энергий в материальный мир знания на
                          доступном языке - языке цифр. Хотя все в нашей жизни энергии, через энергию цифр это доступно и понятно каждому.
                          <br />
                          <br />
                          Добро пожаловать в этот мир, Мир познания себя и Вселенной через себя! И начнём мы с наших Предназначений.
                        </div>
                      </View>
                    ) : (
                      <View style={{ flexDirection: 'row', marginHorizontal: s(8), marginTop: s(10) }}>
                        <View>
                          <img
                            src="images/foto.jpg"
                            width={isMobile ? 148 : 240}
                            height={isMobile ? 180 : 310}
                            // @ts-ignore
                            // style={{ float: 'left', margin: '0 20px 10px 0' }}
                            alt=""
                          />
                        </View>
                        <View style={{ width: 20 }} />
                        <Text style={styles.textMethod}>
                          Приветствую всех, кто задается вопросами самопознания и кому интересна тайна кода своего рождения!
                          <br />
                          <br />
                          Дата рождения - это трехкодичная система ко всему проявленному и непроявленному в нас, это ключ к нашей жизни и инструкция, выданная нам при рождении. Инструмент, который я
                          искала на протяжении нескольких лет, изучая многое для себя, стал частью не только моей жизни, но авторским методом самопознания «Полара», в котором я совместила нумерологию
                          и сакральную геометрию.
                          <br />
                          <br />
                          "Бог мыслит геометрически..." - эта фраза помогла мне найти направление, а Цветок жизни и Цифры дали возможность перевести из мира тонких энергий в материальный мир знания на
                          доступном языке - языке цифр. Хотя все в нашей жизни энергии, через энергию цифр это доступно и понятно каждому.
                          <br />
                          <br />
                          Добро пожаловать в этот мир, Мир познания себя и Вселенной через себя! И начнём мы с наших Предназначений.
                        </Text>
                      </View>
                    )}
                    <View style={{ height: s(20) }} />
                  </View>
                </MovingText>
                <View style={{ height: s(10) }} />
              </View>
            </View>
          </View>
        </View>
      </div>
    )
  }

  return useMemo(() => <Method />, [width, isPortrait])
}

export default MethodBlock
