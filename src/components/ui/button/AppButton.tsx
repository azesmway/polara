/**
 * -----------------------------------------------------------------------
 *  Header      : AppButton.tsx
 *  Created     : 31.12.2024
 *  Modified    : 31.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React from 'react'
import {isMobile, useMobileOrientation} from 'react-device-detect'
import { TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'

import stylesConfig from './AppButton.styles'

type AppButtonProps = {
  type: string
  title: string
  press: any
  disabled?: boolean
}

const T = R.lang

const AppButton = ({ type, title, press, disabled = false }: AppButtonProps) => {
  const styles = useStyles(stylesConfig)
  const { isPortrait } = useMobileOrientation()

  const w = isMobile && isPortrait ? s(200) : 260
  const h = isMobile && isPortrait ? s(36) : 50
  const f = isMobile && isPortrait ? s(15) : 22

  if (type === 'gradient') {
    return (
      <TouchableOpacity onPress={press} disabled={disabled} style={{ zIndex: 100 }}>
        <div
          style={{
            width: w,
            height: h,
            background: 'linear-gradient(0deg, rgba(2, 8, 44, 0.10) 0%, rgba(2, 8, 44, 0.10) 100%), linear-gradient(163deg, rgba(2, 8, 44, 0) 0%, rgba(255, 255, 255, 0.20) 100%)',
            borderRadius: 100,
            border: '1px rgba(245.65, 245.65, 245.65, 0.20) solid',
            backdropFilter: 'blur(48.60px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
          }}>
          <div
            style={{
              color: '#F6F6F6',
              fontSize: f,
              fontFamily: 'Forum',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            {title}
          </div>
        </div>
      </TouchableOpacity>
    )
  } else if (type === 'gradient_white') {
    return (
      <TouchableOpacity onPress={press} disabled={disabled}>
        <div
          style={{
            width: w,
            height: h,
            background: 'linear-gradient(0deg, rgba(31,57,92, 0.10) 0%, rgba(28, 47, 79, 0.10) 100%), linear-gradient(163deg, rgba(28,47,79, 0) 0%, rgba(28,47,79, 0.20) 100%)',
            borderRadius: 100,
            border: '1px rgba(31,57,92, 0.20) solid',
            backdropFilter: 'blur(48.60px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
          }}>
          <div
            style={{
              color: '#2b2b2b',
              fontSize: f,
              fontFamily: 'Forum',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            {title}
          </div>
        </div>
      </TouchableOpacity>
    )
  } else if (type === 'gradient_blue') {
    return (
      <TouchableOpacity onPress={press} disabled={disabled}>
        <div
          style={{
            width: w,
            height: h,
            background: 'linear-gradient(0deg, rgba(31, 57, 92, 0.10) 0%, rgba(28, 47, 79, 0.10) 100%), linear-gradient(163deg, rgba(31, 57, 92, 0) 20%, rgba(28, 47, 79, 0.20) 100%)',
            borderRadius: 100,
            border: '1px rgba(31,57,92, 0.20) solid',
            backdropFilter: 'blur(48.60px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
          }}>
          <div
            style={{
              color: '#2b2b2b',
              fontSize: f,
              fontFamily: 'Forum',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            {title}
          </div>
        </div>
      </TouchableOpacity>
    )
  } else if (type === 'transparent') {
    return (
      <TouchableOpacity onPress={press}>
        <div
          style={{
            width: w,
            height: h,
            borderRadius: 100,
            border: '1px rgba(245.65, 245.65, 245.65, 0.20) solid',
            backdropFilter: 'blur(48.60px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
          }}>
          <div
            style={{
              color: '#F6F6F6',
              fontSize: f,
              fontFamily: 'Forum',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            {title}
          </div>
        </div>
      </TouchableOpacity>
    )
  } else if (type === 'white') {
    return (
      <TouchableOpacity onPress={press}>
        <div
          style={{
            width: w,
            height: h,
            background: 'linear-gradient(0deg, white 0%, white 100%), linear-gradient(163deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.20) 100%)',
            borderRadius: 100,
            border: '1px rgba(245.65, 245.65, 245.65, 0.20) solid',
            backdropFilter: 'blur(48.60px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
          }}>
          <div
            style={{
              color: '#071C49',
              fontSize: f,
              fontFamily: 'Forum',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            {title}
          </div>
        </div>
      </TouchableOpacity>
    )
  } else if (type === 'more') {
    return (
      <TouchableOpacity onPress={press}>
        <div
          style={{
            width: w,
            height: h,
            background: 'linear-gradient(0deg, white 0%, white 100%), linear-gradient(163deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.20) 100%)',
            borderRadius: 100,
            border: '1px #061A43 solid',
            backdropFilter: 'blur(48.60px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
          }}>
          <div
            style={{
              color: '#071C49',
              fontSize: f,
              fontFamily: 'Forum',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
            {title}
          </div>
        </div>
      </TouchableOpacity>
    )
  }

  return <></>
}

export default AppButton
