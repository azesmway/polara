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
import { isMobile } from 'react-device-detect'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: '100%',
    borderRadius: '10@s'
  },
  mainView: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)'
  },
  mainViewInSide: {
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    marginTop: '10@s',
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
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },
  block: {
    borderRadius: '10@s',
    marginHorizontal: '10@s',
    margin: '10@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)'
  }
}))
