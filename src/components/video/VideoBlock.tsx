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
import { useDispatch } from 'react-redux'
import R from 'res'

import stylesConfig from './VideoBlock.styles'

type PolicyBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const VideoBlock = ({}: PolicyBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
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

  const Video = () => {
    return (
      <View
        // @ts-ignore
        style={styles.mainView}>
        <View
          // @ts-ignore
          style={styles.mainViewInSide}>
          <View style={{ marginTop: s(10), alignItems: 'center' }}>
            <iframe
              width={screenSize.width < 540 ? screenSize.width - 40 : s(230)}
              height={screenSize.width < 540 ? screenSize.height / 4 : s(140)}
              src="https://rutube.ru/play/embed/60364b4ac2cdef561c0cb3bfa5ddf26a/"
              frameBorder="0"
              allow="clipboard-write; autoplay"
              // @ts-ignore
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
            />
          </View>
        </View>
      </View>
    )
  }

  if (screenSize.width < 540) {
    return <Video />
  }

  return <Video />
}

export default VideoBlock
