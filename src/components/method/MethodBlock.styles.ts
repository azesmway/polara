/**
 * -----------------------------------------------------------------------
 *  Header      : MethodBlock.styles.ts
 *  Created     : 29.12.2024
 *  Modified    : 29.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента MethodBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: '100%'
  },
  mainView: {
    width: '100%',
    height: '530@s',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)'
  },
  mainViewInSide: {
    height: '530@s',
    marginHorizontal: '7@s',
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    marginTop: '30@s',
    alignItems: 'center'
  },
  textView: {
    marginTop: '20@s',
    paddingHorizontal: '10@s'
  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'white'
  },
  fotoView: {
    marginTop: '20@s',
    alignItems: 'center'
  },
  foto: {
    width: Dimensions.get('window').width - 40,
    aspectRatio: 3 / 4,
    borderWidth: 0.5,
    borderColor: 'rgba(245.65, 245.65, 245.65, 0.20)'
  }
}))
