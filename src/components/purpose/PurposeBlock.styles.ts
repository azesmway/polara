/**
 * -----------------------------------------------------------------------
 *  Header      : PurposeBlock.styles.ts
 *  Created     : 29.12.2024
 *  Modified    : 29.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента PurposeBlock
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
    // height: '430@s',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)'
  },
  mainViewInSide: {
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
  textView: {
    marginTop: '20@s',
    paddingHorizontal: '10@s'
  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'white'
  },
  price: {
    alignItems: 'center',
    marginTop: '26@s'
  },
  block: {
    marginTop: '30@s',
    marginHorizontal: '10@s',
    padding: '10@s',
    borderWidth: 0.5,
    borderColor: 'rgb(48,64,96)'
  },
  parts: {
    marginTop: '20@s',
    alignItems: 'center'
  },
  courses: {
    marginTop: '30@s'
  }
}))
