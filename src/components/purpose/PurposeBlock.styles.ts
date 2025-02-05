/**
 * -----------------------------------------------------------------------
 *  Header      : PurposeBlock.styles.ts
 *  Created     : 29.12.2024
 *  Modified    : 29.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента PurposeBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradientMain: {
    borderRadius: isMobile ? '10@s' : '6@s',
    width: '100%'
  },
  gradient: {
    borderRadius: isMobile ? '10@s' : '6@s',
    width: '100%',
    height: isMobile ? 460 : 600
  },
  mainView: {
    width: Dimensions.get('window').width > 1240 ? 1240 : Dimensions.get('window').width
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'rgb(48,64,96)',
    // backgroundColor: 'rgb(12,25,58)'
  },
  mainViewInSide: {
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  titleView: {
    marginTop: isMobile ? '20@s' : '10@s',
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts?.Forum?.regular,
    textTransform: 'uppercase',
    fontSize: '24@s',
    color: 'white',
    textAlign: 'center'
  },
  textView: {
    marginTop: isMobile ? '15@s' : '10@s',
    paddingHorizontal: isMobile ? '15@s' : '10@s'
  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'white'
  },
  price: {
    flexDirection: Dimensions.get('window').width < 800 ? 'column' : 'row'
  },
  blockText: {
    marginTop: isMobile ? '15@s' : '10@s',
    marginHorizontal: '10@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)',
    borderRadius: isMobile ? '10@s' : '6@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 14,
    // backgroundColor: 'rgb(18,30,60)',
    backgroundImage: `linear-gradient(90deg, rgba(12,25,58, 0.7) 30%, transparent 80%)`
  },
  block: {
    marginTop: isMobile ? '15@s' : '10@s',
    marginHorizontal: '10@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)',
    borderRadius: isMobile ? '10@s' : '6@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 14,
    // backgroundColor: 'rgb(18,30,60)',
    backgroundImage: `linear-gradient(180deg, rgba(12,25,58, 0.7) 30%, transparent 80%)`
  },
  blockModule: {
    borderWidth: 0.5,
    marginHorizontal: '10@s',
    borderColor: 'rgb(48,64,96)',
    backgroundColor: '#00042c'
  },
  parts: {
    marginTop: '20@s',
    alignItems: 'center'
  },
  courses: {
    marginTop: '10@s'
  },
  shadow: {
    margin: '15@s',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 24,

    borderRadius: '10@s',
    borderColor: 'rgb(53,76,94)',
    borderWidth: 0.5,
    backgroundColor: '#020525'
  }
}))
