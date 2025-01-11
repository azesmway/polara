/**
 * -----------------------------------------------------------------------
 *  Header      : ModalBlock.styles.ts
 *  Created     : 30.12.2024
 *  Modified    : 30.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента ModalBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: Dimensions.get('window').width - 40,
    height: '450@s',
    borderRadius: '10@s'
  },
  modal: {
    width: Dimensions.get('window').width - 40,
    height: '450@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)',
    borderRadius: '10@s'
  },
  close: {
    position: 'absolute',
    top: '10@s',
    right: '10@s'
  },
  inputMask: {
    marginTop: '6@s',
    height: '30@s',
    fontSize: '12@s',
    color: '#fff',
    backgroundColor: 'transparent'
  },
  textInput: {
    fontFamily: fonts?.Inter?.regular,
    height: '34@s',
    fontSize: '12@s',
    color: '#fff',
    borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
  text: {
    fontFamily: fonts?.Inter?.regular,
    fontSize: '12@s',
    color: 'white',
    textAlign: 'center'
  }
}))
