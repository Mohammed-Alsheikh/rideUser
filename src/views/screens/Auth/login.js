import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {Caption} from 'react-native-paper';
import {SwitchActions, StackActions} from 'react-navigation';
import {Container} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ROUTES} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import {useTextInput, TextInput, ActivityIndecator, Text} from '../../lib';
import {Snackbar} from 'react-native-paper';
import Colors, {gradientColors} from '../../styles';
import {LOGO} from '../../constants';
import styles from './login.styles';

export default ({navigation, loginUser, user, errorMessage}) => {
  const username = useTextInput('');
  const password = useTextInput('');
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({visible: false, msg: ''});

  useEffect(() => {
    if (user?.id) {
      navigation.dispatch(SwitchActions.jumpTo({routeName: ROUTES.App}));
    } else if (errorMessage !== '') {
      SplashScreen.hide();
      setLoading(false);
      setSnack({visible: true, msg: errorMessage});
    }
  }, [errorMessage, navigation, user]);

  const onSubmit = async () => {
    setLoading(true);
    loginUser(username.value, password.value);
  };

  const _RegisterHandler = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.register,
        params: {},
      }),
    );
  };

  return (
    <Container>
      <View style={styles.container}>
        <Image
          source={LOGO}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 150, height: 150, alignSelf: 'center'}}
        />
        <Text style={styles.text}> تسجيل الدخول </Text>
        <TextInput
          placeholder="اسم المستخدم"
          rightIcon={<Icon name="person" size={19} color={Colors.peachGrey} />}
          {...username}
        />
        <TextInput
          placeholder="كلمة المرور"
          rightIcon={<Icon name="lock" size={19} color={Colors.peachGrey} />}
          {...password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onSubmit}
          disabled={loading}
          activeOpacity={0.9}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={gradientColors}
            style={styles.Gradent}>
            {loading ? (
              <ActivityIndecator size={'small'} />
            ) : (
              <Text style={styles.TextButton}>تسجيل الدخول</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 14,
          }}>
          <TouchableOpacity onPress={_RegisterHandler}>
            <Text style={styles.TextReg}>{'انشاء حساب'}</Text>
          </TouchableOpacity>
          <Caption style={styles.cap}>{'لا تملك حساب؟'}</Caption>
        </View>
      </View>
      <Snackbar
        onDismiss={() => setSnack({visible: false, msg: ''})}
        duration={5000}
        style={{backgroundColor: '#0C4563', borderRadius: 60}}
        visible={snack.visible}>
        {snack.msg}
      </Snackbar>
    </Container>
  );
};
