module.exports = {
  presets: ['module:@react-native/babel-preset', 'babel-preset-expo', '@babel/preset-typescript'],
  env: {
    production: {
      plugins: ['react-native-paper/babel']
    }
  },
  plugins: [
    'module:react-native-dotenv',
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: { '^~(.+)': './src/\\1' },
        extensions: ['.ios.js', '.android.js', '.ios.ts', '.android.ts', '.ios.tsx', '.android.tsx', '.js', '.ts', '.tsx', '.json']
      }
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-private-methods', { loose: true }],
    'react-native-classname-to-style',
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['css']
      }
    ]
  ]
}
