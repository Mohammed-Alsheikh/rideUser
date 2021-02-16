// require('./HighlightUpdates');
import Parse_Config from './parseConfig';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/navigation';
import {StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import Colors from './src/views/styles';
import SplashScreen from 'react-native-splash-screen';

Parse_Config();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    //accent: '#f1c40f',
  },
};

let Navigation = createAppContainer(AppNavigator);
// persistor.purge();

const App = () => {
  SplashScreen.hide();

  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 500);
  // }, []);

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
