const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts
const defaultAssetExts = require('metro-config/src/defaults/defaults').assetExts

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const {
  resolver: { sourceExts }
} = getDefaultConfig()

const config1 = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    })
  },
  resolver: {
    assetExts: [...defaultAssetExts.filter(ext => ext !== 'svg')],
    sourceExts: [...defaultSourceExts, 'svg', 'js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs']
  }
}

const config2 = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-css-transformer')
  },
  resolver: {
    sourceExts: [...sourceExts, 'css']
  }
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config1, config2)
