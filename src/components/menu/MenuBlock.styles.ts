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
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  container: {
    flex: 1
  },
  menu: {
    fontFamily: fonts?.Forum?.regular,
    fontSize: '20@s',
    color: 'white',
    textTransform: 'uppercase'
  }
}))
