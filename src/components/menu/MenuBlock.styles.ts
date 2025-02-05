/**
 * -----------------------------------------------------------------------
 *  Header      : MenuBlock.styles.ts
 *  Created     : 30.12.2024
 *  Modified    : 30.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента MenuBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  container: {
    flex: 1
  },
  header: {
    height: 90,
    flexDirection: 'row',
    marginHorizontal: isMobile ? 0 : '27@s'
  },
  menu: {
    fontFamily: fonts?.Forum?.regular,
    fontSize: isMobile ? '20@s' : '15@s',
    color: 'white',
    textTransform: 'uppercase'
  }
}))
