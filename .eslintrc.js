module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@actions': './src/redux/actions',
          '@types': './src/redux/constants',
          '@constants': ['src/views/constants'],
          '@lib': ['src/views/lib'],
          '@map': ['src/views/Map'],
          '@screens': ['src/views/screens'],
          '@styles': ['src/views/styles'],
        },
      },
    },
  },
};
