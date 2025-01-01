/**
 * -----------------------------------------------------------------------
 *  Header      : QuestionBlock.styles.ts
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента QuestionBlock
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
    height: '460@s',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)'
  },
  mainViewInSide: {
    height: '460@s',
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
  inputMask: {
    marginTop: '6@s',
    height: '30@s',
    fontFamily: fonts?.Inter?.regular,
    fontSize: '12@s',
    color: '#fff',
    backgroundColor: 'transparent'
  },
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
  text: {
    fontFamily: fonts?.Inter?.regular,
    fontSize: '11@s',
    color: 'white',
    textAlign: 'center'
  }
}))
