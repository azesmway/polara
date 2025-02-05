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
    width: '100%'
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'rgb(48,64,96)'
    // backgroundColor: 'rgb(12,25,58)'
  },
  mainViewInSide: {
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    marginTop: '20@s',
    alignItems: 'center'
  }
}))
