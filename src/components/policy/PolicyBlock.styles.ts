/**
 * -----------------------------------------------------------------------
 *  Header      : PolicyBlock.styles.ts
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента PolicyBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  mainView: {
    width: '100%',
    height: isMobile ? '50@s' : 50
  },
  mainViewInSide: {
    height: isMobile ? '50@s' : 70,
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  policy: {
    height: '100%',
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right'
  }
}))
