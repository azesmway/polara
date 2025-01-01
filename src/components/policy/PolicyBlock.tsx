/**
 * -----------------------------------------------------------------------
 *  Header      : PolicyBlock.tsx
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'

import stylesConfig from './PolicyBlock.styles'

type PolicyBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const PolicyBlock = ({}: PolicyBlockProps) => {
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

  const Policy = () => {
    return (
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
              style={{
                opacity: 0.8,
                color: 'white',
                fontSize: s(12),
                fontFamily: 'InterRegular',
                fontWeight: '300',
                textDecoration: 'underline',
                wordWrap: 'break-word'
              }}>
              Политика конфиденциальности
            </div>
            <div
              style={{
                marginTop: s(5),
                opacity: 0.8,
                color: 'white',
                fontSize: s(12),
                fontFamily: 'InterRegular',
                fontWeight: '300',
                wordWrap: 'break-word'
              }}>
              © Полара. Все права защищены
            </div>
          </View>
        </View>
      </View>
    )
  }

  if (screenSize.width < 540) {
    return <Policy />
  }

  return <Policy />
}

export default PolicyBlock
