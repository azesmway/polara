import { Platform } from 'react-native'

export default Platform.select({
  ios: {},
  android: {},
  web: {
    Forum: {
      regular: 'Forum'
    },
    Inter: {
      regular: 'InterRegular',
      bold: 'InterBold'
    }
  }
})
