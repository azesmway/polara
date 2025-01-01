/**
 * @format
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppRegistry, Platform } from 'react-native'
import iconFontAw from 'react-native-vector-icons/Fonts/FontAwesome.ttf'
import iconFontM from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf'

import fontForum from 'assets/fonts/Forum/Forum-Regular.ttf'
import interRegular from 'assets/fonts/Inter/Inter-Regular.otf'
import interBold from 'assets/fonts/Inter/Inter-Bold.otf'
import kreadonRegular from 'assets/fonts/Kreadon/Kreadon-Regular.ttf'

import App from './src/App'

if (Platform.OS === 'web') {
  const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`

  const iconFontStylesM = `@font-face {
  src: url(${iconFontM});
  font-family: MaterialCommunityIcons;
}`

  const iconFontStylesAw = `@font-face {
  src: url(${iconFontAw});
  font-family: FontAwesome;
}`

  const fontForumStyles = `@font-face {
  src: url(${fontForum});
  font-family: Forum;
}`

  const interRegularStyles = `@font-face {
  src: url(${interRegular});
  font-family: InterRegular;
}`

  const interBoldStyles = `@font-face {
  src: url(${interBold});
  font-family: InterBold;
}`

  const kreadonRegularStyles = `@font-face {
  src: url(${kreadonRegular});
  font-family: KreadonRegular;
}`

  // Create stylesheet
  const style = document.createElement('style')
  style.type = 'text/css'
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles
  } else {
    style.appendChild(document.createTextNode(iconFontStyles))
    style.appendChild(document.createTextNode(iconFontStylesM))
    style.appendChild(document.createTextNode(iconFontStylesAw))
    style.appendChild(document.createTextNode(fontForumStyles))
    style.appendChild(document.createTextNode(interRegularStyles))
    style.appendChild(document.createTextNode(interBoldStyles))
    style.appendChild(document.createTextNode(kreadonRegularStyles))
  }

  // Inject stylesheet
  document.head.appendChild(style)
}

AppRegistry.registerComponent('polara', () => App)

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'))
  root.render(<App />)
}
