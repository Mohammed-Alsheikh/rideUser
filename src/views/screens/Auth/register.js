import React, {useState, useEffect} from 'react';
import {Content, Container} from 'native-base';
import {View, Image, TouchableOpacity, Keyboard} from 'react-native';
import {ROUTES} from '../../constants';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Caption} from 'react-native-paper';
import {StackActions, SwitchActions} from 'react-navigation';
import {Snackbar} from 'react-native-paper';
import {Text, ActivityIndecator} from '../../lib';
import {LOGO} from '../../constants';
import {gradientColors} from '../../styles/index';
import styles from './register.styles';

export default ({navigation, registerUser, errorMessage, user}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({visible: false, msg: ''});

  useEffect(() => {
    if (user?.id) {
      navigation.dispatch(SwitchActions.jumpTo({routeName: ROUTES.App}));
    } else if (errorMessage !== '') {
      setLoading(false);
      setSnack({visible: true, msg: errorMessage});
    }
  }, [errorMessage, navigation, user]);

  const onSubmit = () => {
    if (verifyPassword !== password) {
      Keyboard.dismiss();
      setLoading(false);
      setSnack({visible: true, msg: 'كلمة المرور غير متطابقة'});
    } else {
      setLoading(true);
      registerUser(username, password, email, phone);
    }
  };

  const _Switch_Login = () => {
    navigation.dispatch(
      StackActions.pop({
        routeName: ROUTES.login,
        params: {},
      }),
    );
  };
  return (
    <Container>
      <Content keyboardDismissMode="on-drag">
        <View style={styles.container}>
          <Image
            source={LOGO}
            resizeMode="contain"
            resizeMethod="resize"
            style={{width: 150, height: 150, alignSelf: 'center', marginTop: 5}}
          />
          <Text style={styles.Txt}> انشاء حساب </Text>
          <Input
            placeholder="اسم المستخدم"
            autoCapitalize="words"
            inputContainerStyle={styles.input}
            inputStyle={styles.inputtext}
            value={username}
            onChangeText={val => setUsername(val)}
          />
          <Input
            placeholder="رقم الجوال"
            keyboardType="number-pad"
            inputContainerStyle={styles.input}
            inputStyle={styles.inputtext}
            value={phone}
            onChangeText={val => setPhone(val)}
          />
          <Input
            placeholder="كلمة المرور"
            keyboardType="visible-password"
            inputContainerStyle={styles.input}
            inputStyle={styles.inputtext}
            value={password}
            onChangeText={val => setPassword(val)}
          />
          <Input
            placeholder="تأكيد كلمة المرور"
            inputContainerStyle={styles.input}
            inputStyle={styles.inputtext}
            value={verifyPassword}
            onChangeText={val => setVerifyPassword(val)}
          />
          <Input
            placeholder="البريد الالكتروني"
            keyboardType="email-address"
            inputContainerStyle={styles.input}
            inputStyle={styles.inputtext}
            value={email}
            onChangeText={val => setEmail(val)}
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
                <ActivityIndecator size="small" />
              ) : (
                <Text style={styles.Textbutton}>انشاء حساب</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={_Switch_Login}>
              <Text style={styles.TextReg}>{'تسجيل الدخول'}</Text>
            </TouchableOpacity>
            <Caption style={styles.cap}>{'هل تملك حساب؟'}</Caption>
          </View>
        </View>
      </Content>
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
