/**
 * -----------------------------------------------------------------------
 *  Header      : FooterBlock.styles.ts
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента FooterBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: '100%'
  },
  mainView: {
    width: '100%',
    height: '400@s',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)'
  },
  mainViewInSide: {
    height: '400@s',
    marginHorizontal: '7@s',
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    marginTop: '40@s',
    alignItems: 'center'
  },
  logo: {
    marginTop: '40@s',
    alignItems: 'center'
  }
}))
