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
import { isMobile, useMobileOrientation } from 'react-device-detect'
import { Dimensions, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import R from 'res'
import { WIDTH_DESKTOP } from 'res/const.ts'
import { setModalMore } from 'store/data'

import stylesConfig from './PolicyBlock.styles'

type PolicyBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const PolicyBlock = ({}: PolicyBlockProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()

  const { isPortrait } = useMobileOrientation()
  const { width } = useWindowDimensions()

  const Policy = () => {
    const w = width > WIDTH_DESKTOP ? WIDTH_DESKTOP : width

    return (
      <View
        // @ts-ignore
        style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center' }}>
        <View style={{ width: w }}>
          <View
            // @ts-ignore
            style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
            <View id={'contacts'}>
              <View style={{ flexDirection: 'row', width: '100%', marginTop: isMobile ? s(12) : s(5), justifyContent: 'space-between' }}>
                <View
                  // @ts-ignore
                  style={styles.title}>
                  <div
                    style={{
                      marginLeft: s(8),
                      opacity: 0.8,
                      color: '#e9edfb',
                      fontSize: 14,
                      fontFamily: 'InterRegular',
                      fontWeight: '300',
                      wordWrap: 'break-word'
                    }}>
                    © Полара.
                    <br />
                    Все права защищены
                  </div>
                </View>
                <View
                  // @ts-ignore
                  style={styles.policy}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        setModalMore({
                          viewModal: true,
                          typeModal: 'policy'
                        })
                      )
                    }}>
                    <div
                      style={{
                        opacity: 0.8,
                        marginRight: s(8),
                        color: '#e9edfb',
                        fontSize: 14,
                        fontFamily: 'InterRegular',
                        fontWeight: '300',
                        textDecoration: 'underline',
                        wordWrap: 'break-word'
                      }}>
                      Политика конфиденциальности
                    </div>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  if (isMobile) {
    return <Policy />
  }

  return <Policy />
}

export default PolicyBlock
