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
import React from 'react'
import { isMobile, useMobileOrientation } from 'react-device-detect'
import { Dimensions, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { WIDTH_DESKTOP } from 'res/const'

import stylesConfig from './VideoBlock.styles'

type PolicyBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const VideoBlock = ({}: PolicyBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()

  const { isPortrait } = useMobileOrientation()
  const { width, height } = useWindowDimensions()

  const Video = () => {
    const w = width > WIDTH_DESKTOP ? WIDTH_DESKTOP : Dimensions.get('window').width

    return (
      <View
        // @ts-ignore
        style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ width: (width - w) / 2, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
        <View style={{ width: w }}>
          <View style={{ position: 'absolute', width: w, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
          <View
            // @ts-ignore
            style={styles.mainView}>
            <View
              // @ts-ignore
              style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
              <View style={{ marginTop: s(10), alignItems: 'center' }}>
                <iframe
                  width={isMobile && isPortrait ? width - 40 : isMobile && !isPortrait ? width - s(200) : s(230)}
                  height={isMobile && isPortrait ? height / 4 : isMobile && !isPortrait ? height / 1.2 : s(140)}
                  src="https://rutube.ru/play/embed/60364b4ac2cdef561c0cb3bfa5ddf26a/"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  // @ts-ignore
                  webkitAllowFullScreen
                  mozallowfullscreen
                  allowFullScreen
                />
              </View>
              <View style={{ marginTop: s(10), alignItems: 'center' }} />
            </View>
          </View>
        </View>
        <View style={{ width: (width - w) / 2, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
      </View>
    )
  }

  if (isMobile) {
    return <Video />
  }

  return <Video />
}

export default VideoBlock
