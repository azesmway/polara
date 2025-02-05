/**
 * -----------------------------------------------------------------------
 *  Header      : MainBlock.styles.ts
 *  Created     : 27.12.2024
 *  Modified    : 27.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента MainBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  mainView: {},
  mainViewInSide: {
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    width: '100%',
    fontFamily: fonts?.Forum?.regular,
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: 'UbuntuRegular',
    fontSize: '18@s',
    color: 'white',
    textAlign: 'center'
  }
}))
