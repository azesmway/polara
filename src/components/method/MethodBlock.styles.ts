/**
 * -----------------------------------------------------------------------
 *  Header      : MethodBlock.styles.ts
 *  Created     : 29.12.2024
 *  Modified    : 29.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента MethodBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    opacity: 0.8,
    borderRadius: '10@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.9,
    shadowRadius: 26,

    elevation: 24,
    backgroundColor: 'rgb(12,25,58)'
  },
  blockView: {
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  mainView: {
    // marginTop: '5@s'
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'rgb(48,64,96)',
    // borderLeftWidth: 0.5,
    // borderLeftColor: 'rgb(48,64,96)',
    // borderRightWidth: 0.5,
    // borderRightColor: 'rgb(53,76,94)'
  },
  mainViewInSide: {
    // borderWidth: 0.5,
    // borderColor: 'rgb(53,76,94)',
    // borderRadius: '10@s',
    // backgroundImage: `linear-gradient(135deg, transparent, rgba(12,25,58, 0.6) 50%, transparent)`,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 5
    // },
    // shadowOpacity: 1,
    // shadowRadius: 20,
    // elevation: 24
  },
  title: {
    marginTop: isMobile ? '15@s' : '8@s',
    alignItems: 'center'
  },
  textView: {
    marginTop: isMobile ? '20@s' : '10@s'
    // paddingHorizontal: '10@s'
  },
  textMethod: {
    // width: '310@s',
    // paddingHorizontal: '5@s',
    textAlign: 'justify',
    color: 'white',
    fontSize: 16,
    fontFamily: fonts?.Inter?.regular,
    fontWeight: '400'
  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'white'
  },
  fotoView: {
    marginTop: '20@s',
    alignItems: 'center'
  },
  foto: {
    width: Dimensions.get('window').width - 40,
    aspectRatio: 3 / 4,
    borderWidth: 0.5,
    borderColor: 'rgba(245.65, 245.65, 245.65, 0.20)'
  },
  block: {
    marginTop: '16@s',
    marginHorizontal: '6@s',
    // padding: '4@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)'
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
