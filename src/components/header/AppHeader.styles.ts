/**
 * -----------------------------------------------------------------------
 *  Header      : AppHeader.styles.ts
 *  Created     : 27.12.2024
 *  Modified    : 27.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента AppHeader
 * -----------------------------------------------------------------------
 */

// @flow
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  mainViewInSide: {
    marginHorizontal: '27@s',
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)',
    flexDirection: 'row'
  },
  mainViewInSideMob: {
    flexDirection: 'row'
  },
  menu: { color: '#fff', fontFamily: fonts?.Forum?.regular, fontSize: 18 }
}))
