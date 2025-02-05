/**
 * -----------------------------------------------------------------------
 *  Header      : MasterBlock.styles.ts
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента MasterBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: '100%'
  },
  mainView: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)',
    backgroundColor: 'rgb(12,25,58)'
  },
  mainViewInSide: {
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    marginTop: isMobile ? '15@s' : '10@s',
    alignItems: 'center'
  },
  block: {
    // marginTop: '30@s',
    marginHorizontal: '10@s',
    padding: '10@s'
    // borderWidth: 0.5,
    // borderColor: 'rgb(48,64,96)',
    // backgroundColor: 'rgb(5,24,62)'
  },
  blockHidden: {
    height: 360,
    marginTop: '10@s',
    marginHorizontal: '10@s'
    // borderWidth: 0.5,
    // borderColor: 'rgb(48,64,96)',
    // borderRadius: '6@s',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // },
    // shadowOpacity: 0.6,
    // shadowRadius: 26,
    // elevation: 24,
    // backgroundColor: 'rgb(22,34,68)'
  },
  textView: {
    height: isMobile ? 260 : 260,
    marginTop: '10@s'
  }
}))
