import React, {useState, useEffect} from 'react';
import {Searchbar, Menu, Divider} from 'react-native-paper';
import * as Animate from 'react-native-animatable';
import {StyleSheet, Keyboard} from 'react-native';
import Fonts from '../styles/fonts';
import {width} from '../styles';
import {checkPointSearch, fetchTrips} from '../../redux/actions';
import {connect} from 'react-redux';
import useDebouncedEffect from 'use-debounced-effect';
import r from 'reactotron-react-native';

const Search = ({useSnack, setTripVisible, fetchTrips}) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useDebouncedEffect(
    () => {
      if (query.length) {
        (async () => {
          const results = await checkPointSearch(query);
          setSearchResults(results);
          r.logImportant(results);
        })();
      }
    },
    500,
    [query],
  );

  return (
    <Animate.View animation="slideInLeft" duration={1000}>
      <Menu
        visible={searchResults?.length && query.length}
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
              useSnack.setState({
                visible: true,
                type: 'confirmation',
                onConfirm: () => {
                  useSnack.onDismiss();
                  setSearchResults([]);
                  fetchTrips(result);
                  setTripVisible(true);
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

export default connect(
  null,
  {checkPointSearch, fetchTrips},
)(Search);
