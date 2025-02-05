/**
 * -----------------------------------------------------------------------
 *  Header      : QuestionForm.styles.ts
 *  Created     : 02.01.2025
 *  Modified    : 02.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента QuestionForm
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  textInput: {
    height: isMobile ? '34@s' : 28,
    fontFamily: fonts?.Inter?.regular,
    fontSize: isMobile ? '12@s' : 16,
    color: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
  inputMask: {
    marginTop: '6@s',
    height: isMobile ? '30@s' : 28,
    fontFamily: fonts?.Inter?.regular,
    fontSize: isMobile ? '12@s' : 16,
    color: '#fff',
    backgroundColor: 'transparent'
  }
}))
