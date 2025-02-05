/**
 * -----------------------------------------------------------------------
 *  Header      : FooterBlock.tsx
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
import { Dimensions, Linking, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { s } from 'react-native-size-matters'
import R from 'res'
import { WIDTH_DESKTOP } from 'res/const'

import stylesConfig from './FooterBlock.styles'

type FooterBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const FooterBlock = ({}: FooterBlockProps) => {
  const styles = useStyles(stylesConfig)
  const { isPortrait } = useMobileOrientation()
  const { width } = useWindowDimensions()

  const LinkIcons = () => {
    return (
      <View style={{ width: 30, height: isMobile && isPortrait ? s(100) : 55, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://t.me/ms_polara')
          }}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_268_437)">
              <path
                /* eslint-disable-next-line max-len */
                d="M22.9188 2.21323L0.819797 10.7792C-0.0695076 11.1781 -0.370295 11.9769 0.604851 12.4105L6.2742 14.2215L19.982 5.706C20.7304 5.17141 21.4967 5.31396 20.8373 5.90204L9.0642 16.6169L8.69438 21.1514C9.03692 21.8515 9.66412 21.8548 10.0642 21.5068L13.3214 18.4089L18.8999 22.6077C20.1956 23.3788 20.9006 22.8812 21.1793 21.468L24.8383 4.05269C25.2182 2.3132 24.5704 1.54677 22.9188 2.21323Z"
                fill="white"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <clipPath id="clip0_268_437">
                <rect width="24.9438" height="24.9438" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </TouchableOpacity>
        <View style={{ height: isMobile && isPortrait ? s(30) : s(10) }} />
        <TouchableOpacity onPress={() => {}}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              /* eslint-disable-next-line max-len */
              d="M23.5265 5.4735C22.053 4 19.6809 4 14.9375 4H14.0625C9.31912 4 6.947 4 5.4735 5.4735C4 6.947 4 9.31912 4 14.0625V14.9375C4 19.6809 4 22.0521 5.4735 23.5265C6.947 25.0009 9.31912 25 14.0625 25H14.9375C19.6809 25 22.0521 25 23.5265 23.5265C25 22.053 25 19.6809 25 14.9375V14.0625C25 9.31912 25 6.947 23.5265 5.4735ZM21.0651 18.875H19.5339C18.9502 18.875 18.7787 18.4095 17.7401 17.3709C16.831 16.495 16.4416 16.3812 16.215 16.3812C15.9061 16.3812 15.8142 16.4688 15.8142 16.9062V18.2791C15.8142 18.6554 15.6944 18.875 14.7205 18.875C13.0982 18.875 11.315 17.8897 10.0489 16.0732C8.15013 13.4124 7.63125 11.4007 7.63125 10.9956C7.63125 10.7681 7.71875 10.5625 8.15625 10.5625H9.68837C10.0795 10.5625 10.2265 10.734 10.3735 11.1575C11.1225 13.3389 12.386 15.2455 12.9049 15.2455C13.0991 15.2455 13.1884 15.1554 13.1884 14.6619V12.407C13.1315 11.3692 12.5794 11.2835 12.5794 10.9142C12.5794 10.7436 12.7255 10.5625 12.9688 10.5625H15.3759C15.7005 10.5625 15.8134 10.7357 15.8134 11.1251V14.1587C15.8134 14.4825 15.9542 14.5962 16.0514 14.5962C16.2465 14.5962 16.4084 14.4825 16.7654 14.1255C17.8687 12.8926 18.6475 10.9947 18.6475 10.9947C18.7455 10.7672 18.924 10.5616 19.3142 10.5616H20.8455C21.3084 10.5616 21.4064 10.7996 21.3084 11.1243C21.1133 12.0168 19.2477 14.6444 19.2477 14.6444C19.085 14.9042 19.0202 15.0337 19.2477 15.326C19.4105 15.5535 19.9451 16.0076 20.3021 16.4294C20.9601 17.1696 21.4562 17.7935 21.5945 18.224C21.7222 18.6562 21.5026 18.875 21.0651 18.875Z"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>
        </TouchableOpacity>
      </View>
    )
  }

  const IpData = () => {
    return (
      <View style={{ flex: width < 800 ? 1 : 0.7, alignItems: 'center' }}>
        <div
          style={{
            marginTop: isMobile ? s(10) : s(4),
            opacity: 0.8,
            color: '#e9edfb',
            fontSize: 14,
            fontFamily: 'InterRegular',
            fontWeight: '300',
            wordWrap: 'break-word',
            textAlign: 'center'
          }}>
          ИП Кошкина Евгения Валентиновна
          <br />
          ОГРН 324784700298912
        </div>
      </View>
    )
  }

  const Name = () => {
    return (
      <View style={{ marginLeft: isMobile && isPortrait ? 0 : 15 }}>
        <div
          style={{
            marginTop: isMobile ? s(10) : s(4),
            opacity: 0.8,
            color: '#F6F6F6',
            fontSize: isMobile ? s(15) : 18,
            fontFamily: 'KreadonRegular',
            fontWeight: '400',
            textTransform: 'uppercase',
            wordWrap: 'break-word'
          }}>
          Авторский Метод <br />
          Евгении Кошкиной
        </div>
      </View>
    )
  }

  const Logo = () => {
    return (
      <View style={{ width: 60, height: isMobile && isPortrait ? s(100) : 55, justifyContent: 'center' }}>
        <svg id="a" width="60" height="60" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476 476">
          <path
            /* eslint-disable-next-line max-len */
            d="M238,468.8c-61.65,0-119.61-24.01-163.2-67.6S7.2,299.65,7.2,238,31.21,118.39,74.8,74.8,176.35,7.2,238,7.2s119.61,24.01,163.2,67.6,67.6,101.55,67.6,163.2-24.01,119.61-67.6,163.2-101.55,67.6-163.2,67.6ZM238,8.8c-61.22,0-118.78,23.84-162.07,67.13S8.8,176.78,8.8,238s23.84,118.78,67.13,162.07c43.29,43.29,100.85,67.13,162.07,67.13s118.78-23.84,162.07-67.13c43.29-43.29,67.13-100.85,67.13-162.07s-23.84-118.78-67.13-162.07C356.78,32.64,299.22,8.8,238,8.8Z"
            fill="#fff"
            stroke-width="0"
          />
          <path
            /* eslint-disable-next-line max-len */
            d="M238,438.8c-110.72,0-200.8-90.08-200.8-200.8S127.28,37.2,238,37.2s200.8,90.08,200.8,200.8-90.08,200.8-200.8,200.8ZM238,38.8c-109.84,0-199.2,89.36-199.2,199.2s89.36,199.2,199.2,199.2,199.2-89.36,199.2-199.2S347.84,38.8,238,38.8Z"
            fill="#fff"
            stroke-width="0"
          />
          <path d="M238,349.75l-87.96-171.75.19-.36L238,6.25l87.96,171.75-.19.36-87.77,171.39ZM151.84,178l86.16,168.25,86.16-168.25L238,9.75l-86.16,168.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,319.75l-72.6-141.75.19-.36L238,36.25l72.6,141.75-.19.36-72.41,141.39ZM167.2,178l70.8,138.25,70.8-138.25L238,39.75l-70.8,138.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,289.75l-57.23-111.75.19-.36,57.05-111.39,57.23,111.75-.19.36-57.05,111.39ZM182.57,178l55.43,108.25,55.44-108.25-55.44-108.25-55.43,108.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,409.75l-57.23-111.75.19-.36,57.05-111.39,57.23,111.75-57.23,111.75ZM182.57,298l55.43,108.25,55.44-108.25-55.44-108.25-55.43,108.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,382.39l-73.94-144.39,73.94-144.39,73.94,144.39-73.94,144.39ZM168.55,238l69.45,135.61,69.45-135.61-69.45-135.61-69.45,135.61Z" fill="#fff" stroke-width="0" />
          <path d="M238,469.75l-87.96-171.75.19-.36,87.77-171.39,87.96,171.75-87.96,171.75ZM151.84,298l86.16,168.25,86.16-168.25-86.16-168.25-86.16,168.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,439.75l-72.6-141.75.19-.36,72.41-141.39,72.6,141.75-72.6,141.75ZM167.2,298l70.8,138.25,70.8-138.25-70.8-138.25-70.8,138.25Z" fill="#fff" stroke-width="0" />
          <polygon points="227.76 238 238 218 248.24 238 238 258 227.76 238" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="8" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="468" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="158" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="318" r="8" fill="#fff" stroke-width="0" />
          <circle cx="75.37" cy="75.37" r="8" fill="#fff" stroke-width="0" />
          <circle cx="400.63" cy="400.63" r="8" fill="#fff" stroke-width="0" />
          <circle cx="8" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="468" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="75.37" cy="400.63" r="8" fill="#fff" stroke-width="0" />
          <circle cx="400.63" cy="75.37" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="38" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="438" r="8" fill="#fff" stroke-width="0" />
          <circle cx="64.79" cy="138" r="8" fill="#fff" stroke-width="0" />
          <circle cx="411.21" cy="338" r="8" fill="#fff" stroke-width="0" />
          <circle cx="64.79" cy="338" r="8" fill="#fff" stroke-width="0" />
          <circle cx="411.21" cy="138" r="8" fill="#fff" stroke-width="0" />
          <circle cx="138" cy="64.79" r="8" fill="#fff" stroke-width="0" />
          <circle cx="338" cy="411.21" r="8" fill="#fff" stroke-width="0" />
          <circle cx="38" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="438" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="138" cy="411.21" r="8" fill="#fff" stroke-width="0" />
          <circle cx="338" cy="64.79" r="8" fill="#fff" stroke-width="0" />
        </svg>
      </View>
    )
  }

  const LogoAndName = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Logo />
        <Name />
      </View>
    )
  }

  const Footer = () => {
    const w = width > WIDTH_DESKTOP ? WIDTH_DESKTOP : width

    return (
      <View style={{ width: '100%', borderBottomWidth: 0.5, borderBottomColor: 'rgb(48,64,96)', alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ width: (width - w) / 2, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
        <View style={{ width: w }}>
          <View style={{ position: 'absolute', width: w, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
          <View
            // @ts-ignore
            style={styles.mainView}>
            <View
              // @ts-ignore
              style={[styles.mainViewInSide, { marginHorizontal: isMobile && isPortrait ? s(7) : s(27) }]}>
              {isMobile && isPortrait ? (
                <View style={{ flexDirection: 'row', padding: isMobile && isPortrait ? s(10) : s(8) }}>
                  <Logo />
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Name />
                    <IpData />
                  </View>
                  <LinkIcons />
                </View>
              ) : (
                <View style={{ flexDirection: 'row', padding: isMobile && isPortrait ? s(10) : s(8) }}>
                  <LogoAndName />
                  <IpData />
                  {width > 800 ? <View style={{ flex: 0.3 }} /> : <></>}
                  <LinkIcons />
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={{ width: (width - w) / 2, height: '100%', backgroundColor: 'rgb(12,25,58)', opacity: 0.3 }} />
      </View>
    )
  }

  if (isMobile) {
    return <Footer />
  }

  return <Footer />
}

export default FooterBlock
