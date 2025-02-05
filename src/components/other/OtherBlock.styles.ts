/**
 * -----------------------------------------------------------------------
 *  Header      : OtherBlock.styles.ts
 *  Created     : 30.12.2024
 *  Modified    : 30.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента OtherBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: '100%'
  },
  gradienBlock: {
    width: '100%',
    borderRadius: '6@s'
  },
  mainView: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)'
  },
  blockView: {
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  mainViewInSide: {
    marginHorizontal: isMobile ? '7@s' : '27@s',
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    marginTop: isMobile ? '15@s' : '8@s',
    alignItems: 'center'
  },
  block: {
    marginTop: '10@s',
    marginHorizontal: '10@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)',
    borderRadius: isMobile ? '10@s' : '6@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 14
  },
  blockHidden: {
    height: 360,
    marginTop: '10@s',
    marginHorizontal: '10@s'
  },
  textView: {
    height: isMobile ? '320@s' : 360,
    marginTop: '10@s',
    paddingHorizontal: isMobile ? '15@s' : '10@s'
  }
}))
