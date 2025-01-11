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
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  textInput: {
    height: '34@s',
    fontFamily: fonts?.Inter?.regular,
    fontSize: '12@s',
    color: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
  inputMask: {
    marginTop: '6@s',
    height: '30@s',
    fontFamily: fonts?.Inter?.regular,
    fontSize: '12@s',
    color: '#fff',
    backgroundColor: 'transparent'
  }
}))
