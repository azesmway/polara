/**
 * -----------------------------------------------------------------------
 *  Header      : MoreModal.styles.ts
 *  Created     : 01.01.2025
 *  Modified    : 01.01.2025
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента MoreModal
 * -----------------------------------------------------------------------
 */

// @flow
import { isMobile } from 'react-device-detect'
import { s } from 'react-native-size-matters'
import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  close: {
    position: 'absolute',
    top: '5@s',
    right: '5@s'
  },
  subject: {
    width: '100%',
    color: '#FFFFFF',
    fontSize: isMobile ? s(24) : 42,
    fontFamily: 'Forum',
    fontWeight: '400',
    textTransform: 'uppercase',
    wordWrap: 'break-word'
  },
  subtitle: {
    marginTop: s(4),
    width: '100%',
    color: '#FFFFFF',
    fontSize: isMobile ? s(18) : 28,
    fontFamily: 'Forum',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  description: {
    marginTop: isMobile ? s(20) : s(5),
    width: '100%',
    opacity: 0.8,
    textAlign: 'justify',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'InterRegular',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  textBlockName: {
    width: '100%',
    color: '#FFFFFF',
    fontSize: isMobile ? s(16) : 24,
    fontFamily: 'Forum',
    fontWeight: '400',
    textTransform: 'uppercase',
    wordWrap: 'break-word',
    paddingLeft: 10,
    fontStyle: 'italic'
  },
  moduleTitle: {
    width: '100%',
    opacity: 0.6,
    color: '#FFFFFF',
    fontSize: isMobile ? s(16) : 24,
    fontFamily: 'Forum',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  moduleName: {
    color: '#FFFFFF',
    fontSize: isMobile ? s(18) : 32,
    fontFamily: 'Forum',
    fontWeight: '400',
    textTransform: 'uppercase',
    wordWrap: 'break-word'
  },
  moduleSubject: {
    marginTop: isMobile ? s(20) : s(5),
    width: '100%',
    opacity: 0.8,
    textAlign: 'justify',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'InterRegular',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  moduleProgram: {
    marginTop: isMobile ? s(20) : s(5),
    marginBottom: isMobile ? s(10) : s(5),
    width: '100%',
    color: '#FFFFFF',
    fontSize: isMobile ? s(17) : 28,
    fontFamily: 'Forum',
    fontWeight: '400',
    wordWrap: 'break-word'
  }
}))
