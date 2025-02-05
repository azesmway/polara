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
import { isMobile } from 'react-device-detect'
import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: isMobile ? Dimensions.get('window').width - 40 : Dimensions.get('window').width / 2,
    // height: isMobile ? '450@s' : '200@s',
    borderRadius: '10@s'
  },
  modal: {
    width: isMobile ? Dimensions.get('window').width - 40 : Dimensions.get('window').width / 2,
    // height: isMobile ? '450@s' : '200@s',
    borderWidth: 0.5,
    borderColor: 'rgb(96,128,200)',
    borderRadius: '10@s'
  },
  close: {
    position: 'absolute',
    top: isMobile ? '10@s' : '5@s',
    right: isMobile ? '10@s' : '5@s'
  },
  inputMask: {
    marginTop: '6@s',
    height: isMobile ? '30@s' : '12@s',
    fontSize: isMobile ? '12@s' : '5@s',
    color: '#fff',
    backgroundColor: 'transparent'
  },
  textInput: {
    fontFamily: fonts?.Inter?.regular,
    height: isMobile ? '34@s' : '12@s',
    fontSize: isMobile ? '12@s' : '5@s',
    color: '#fff',
    borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
  text: {
    fontFamily: fonts?.Inter?.regular,
    fontSize: isMobile ? '12@s' : 16,
    color: 'white',
    textAlign: 'center'
  }
}))
