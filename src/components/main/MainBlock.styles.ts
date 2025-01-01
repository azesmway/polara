/**
 * -----------------------------------------------------------------------
 *  Header      : MainBlock.styles.ts
 *  Created     : 27.12.2024
 *  Modified    : 27.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента MainBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  gradient: {
    width: '100%',
    height: '630@s'
  },
  mainView: {
    width: '100%',
    height: '630@s',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(48,64,96)'
  },
  mainViewInSide: {
    height: '630@s',
    marginHorizontal: '7@s',
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgb(48,64,96)',
    borderRightWidth: 0.5,
    borderRightColor: 'rgb(53,76,94)'
  },
  title: {
    fontFamily: fonts?.Forum?.regular,
    textTransform: 'uppercase',
    fontSize: '24@s',
    color: 'white',
    textAlign: 'center'
  },
  buttonBG: {
    width: '200@s',
    height: '36@s',
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(163deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.20) 100%)',
    borderRadius: 100,
    border: '1px rgba(245.65, 245.65, 245.65, 0.20) solid',
    backdropFilter: 'blur(48.60px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex'
  }
}))
