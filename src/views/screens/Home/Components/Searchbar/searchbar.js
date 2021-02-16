import React, {useState} from 'react';
import {Searchbar, Menu, Divider} from 'react-native-paper';
import * as Animate from 'react-native-animatable';
import {StyleSheet, Keyboard} from 'react-native';
import Fonts from '@styles/fonts';
import {width} from '@styles/index';
import {checkPointSearch, fetchTrips} from '@actions/index';
import Types from '@types/index';
import reactotron from 'reactotron-react-native';
import {useSelector, useDispatch} from 'react-redux';
import useDebouncedEffect from 'use-debounced-effect';

const _default = ({}) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  useDebouncedEffect(
    () => {
      if (query.length) {
        (async () => {
          const results = await checkPointSearch(query);
          setSearchResults(results);
        })();
      }
    },
    500,
    [query],
  );

  return (
    <Animate.View animation="slideInLeft" duration={1000}>
      {reactotron.log(!!searchResults?.length && !!query.length)}
      <Menu
        visible={!!searchResults?.length && !!query.length}
        onDismiss={() => setSearchResults([])}
        contentStyle={{marginTop: 60, width: width - 16}}
        anchor={
          <Searchbar
            placeholder="ابحث عن وجهة"
            focus={true}
            query={query}
            onChangeText={q => setQuery(q)}
            onIconPress={() => {}}
            inputStyle={styles.input}
            blurOnSubmit={true}
            style={{borderRadius: 30, marginHorizontal: 6, marginVertical: 8}}
          />
        }>
        {searchResults?.map(result => (
          <Menu.Item
            onPress={() => {
              Keyboard.dismiss();
              dispatch({
                type: Types.SET_SNACK_STATE,
                payload: {
                  visible: true,
                  type: 'confirmation',
                  onConfirm: () => {
                    dispatch({
                      type: Types.CLEAR_SNACK,
                    });
                    setSearchResults([]);
                    fetchTrips(result)(dispatch);
                    dispatch({
                      type: Types.SET_TRIPS_VISIBLE,
                      payload: true,
                    });
                  },
                },
              });
            }}
            title={result.get('name')}
          />
        ))}
        <Divider />
      </Menu>
    </Animate.View>
  );
};
const styles = StyleSheet.create({
  input: {
    textAlign: Fonts.AlignText,
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
    color: Fonts.color,
  },
});

export {_default as Searchbar};
export default _default;
