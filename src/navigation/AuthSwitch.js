import {createSwitchNavigator} from 'react-navigation';
import {LoginScreen, RegisterScreen} from '../views/screens/Auth';
import {ROUTES} from '../views/constants';
import App from './Drawer/DrawerNavigation';
import {createStackNavigator} from 'react-navigation-stack';

const AuthStack = () => {
  const routes = {
    [ROUTES.login]: {
      screen: LoginScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    [ROUTES.register]: {
      screen: RegisterScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
  };

  const config = {
    headerLayoutPreset: 'center',
    initialRouteName: ROUTES.login,
  };

  return createStackNavigator(routes, config);
};
const AuthSwitch = createSwitchNavigator(
  {
    [ROUTES.AuthStack]: {screen: AuthStack()},
    [ROUTES.App]: {screen: App},
  },
  {
    initialRouteName: ROUTES.AuthStack,
  },
);

export default AuthSwitch;
