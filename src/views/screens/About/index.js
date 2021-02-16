import React from 'react';
import {Content} from 'native-base';
import {View, Image, StyleSheet} from 'react-native';
import {width, height} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../styles/fonts';
import Text from '../../lib/Text';
export default ({}) => {
  const LOGO = require('../../assets/Logo/logo2.png');
  const gradientcolor = [
    '#0E82AC',
    '#0D6F95',
    '#0D5C7F',
    '#0C4968',
    '#0C415F',
    '#0C4563',
    '#0C415E',
  ];

  return (
    <Content style={{flex: 1}}>
      <LinearGradient colors={gradientcolor}>
        <View
          style={{
            height: height,
            width: width,
            backgroundColor: 'transparent',
          }}>
          <Image
            source={LOGO}
            resizeMode="contain"
            resizeMethod="resize"
            style={{
              width: 175,
              height: 175,
              alignSelf: 'center',
              marginTop: 10,
            }}
          />
          <Text style={styles.TXT}>
            هو التطبيق الأول لمعرفة مواقع الحافلات في {'\n'} 
            المنطقة من أجل رحلة أمنة وموثوقة و معرفة موقع {'\n'}
            الحافلات{'\n'}
            ما الذي يجعل تطبيق رايد رائعا:{'\n'}
            {'\n'}
            -معرفة مواقع الحافلات و متابعتها لحظة بلحظة .{'\n'}
            -حجز مقعد في الحافلات وانت في البيت او العمل او الجامعة .{'\n'}
            -معرفة الوقت الذي تحتاجه الحافلة لتصلك .{'\n'} {'\n'}
            -يعرف السائق اماكن الركاب .{'\n'} {'\n'}
            -يوفر تطبيق رايد نظام لتتبع السائق في الوقت الفعلي وايضا معرفة جميع
            الحافلات المتوجهة للمكان المحدد .{'\n'}
            {'\n'} {'\n'}
            -تتبع نظام تحديد المواقع العالمي (GPS) خاص بنا (راجع ماذا فعلنا
            هناك؟),{'\n'} بحيث يمكن أن تصل نقاطنا بسهولة أو تنزلك عن المكان الذي
            تريده بالضبط.{'\n'} {'\n'}
            -دعم العملاء لدينا جاهز لمساعدتك طوال اليوم, كل يوم.{'\n'}
          </Text>
        </View>
      </LinearGradient>
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TXT: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
    paddingHorizontal: 20,
    fontFamily: Fonts.Type,
    textAlign: 'right',
    paddingVertical: 5,
  },
});
