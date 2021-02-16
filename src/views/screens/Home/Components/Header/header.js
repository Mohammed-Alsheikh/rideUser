import React, {useState} from 'react';
import {Appbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from 'react-navigation-drawer';
import {Searchbar} from '../Searchbar';
import Fonts from '@styles/fonts';

const _default = ({navigation}) => {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{zIndex: 99, left: 0, right: 0, top: 0}}
      colors={['#0C4563', '#0C415F', '#0C4968', '#0D5C7F', '#0D6F95']}>
      <Appbar.Header style={{backgroundColor: 'transparent'}}>
        <Appbar.Content
          title="الخريطة"
          titleStyle={{
            textAlign: 'center',
            color: 'white',
            fontFamily: Fonts.Type,
            marginLeft: 36,
          }}
        />
        <Icon
          name="search"
          style={{position: 'absolute', left: 14}}
          size={24}
          color="#fff"
          onPress={() => setSearchVisible(true)}
          onLongPress={() => setSearchVisible(false)}
        />
        <Appbar.Action
          icon="menu"
          size={24}
          color="#fff"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </Appbar.Header>
      {searchVisible && <Searchbar />}
    </LinearGradient>
  );
};

export {_default as Header};
export default _default;
