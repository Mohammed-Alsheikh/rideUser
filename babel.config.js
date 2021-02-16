const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.js', '.ios.js', '.android.js', '.json'],
    alias: {
      '@actions': './src/redux/actions',
      '@types': './src/redux/constants',
      '@constants': ['./src/views/constants'],
      '@lib': ['./src/views/lib'],
      '@map': ['./src/views/Map'],
      '@screens': ['./src/views/screens'],
      '@styles': ['./src/views/styles'],
    },
  },
];

module.exports = {
  plugins: [MODULE_RESOLVER],
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
};
