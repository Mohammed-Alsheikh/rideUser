import React, {useState, useEffect, useRef} from 'react';
import Geolocation from 'react-native-geolocation-service';

import MapView from 'react-native-maps';
import {ActivityIndecator as Activity} from '../lib';

import MyMarker from './marker';
import permission from './permissions';
import {Checkpoints, Directions, Tracker, NearestPoint} from './Components';

import {GEOLOCATION_OPTIONS, LATITUDE, LONGITUDE} from './constants';
import styles from './styles';
import {useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import MapTypes from '@types/map';

export default ({navigation}) => {
  const {mode, driverObj, busLocation} = useSelector(_ => _.map);
  const mapView = useRef(null);

  const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    if (mode === MapTypes.TRACKING && busLocation) {
      goToLocation({
        latitude: parseFloat(busLocation.latitude),
        longitude: parseFloat(busLocation.longitude),
      });
    }
  }, [mode, busLocation]);

  useEffect(() => {
    (async () => {
      if (await permission()) {
        Geolocation.getCurrentPosition(
          position => {
            setCoordinate({
              latitude: parseFloat(position.coords.latitude),
              longitude: parseFloat(position.coords.longitude),
              latitudeDelta: 5,
              longitudeDelta: 5,
            });
          },
          error => reactotron.log(error),
          GEOLOCATION_OPTIONS,
        );
      }
    })();
  }, []);

  const goToInitialLocation = () => {
    const initialRegion = Object.assign({}, coordinate);

    initialRegion.latitudeDelta = 0.1;
    initialRegion.longitudeDelta = 0.1;
    mapView.current.animateToRegion(initialRegion, 1000);
  };

  const goToLocation = newCoords => {
    const initialRegion = Object.assign({}, newCoords);
    initialRegion.latitudeDelta = 0.1;
    initialRegion.longitudeDelta = 0.1;
    mapView.current.animateToRegion(initialRegion, 1000);
  };

  return coordinate ? (
    <MapView
      followUserLocation={true}
      style={styles.map}
      loadingEnabled
      userLocationAnnotationTitle={'My Location'}
      ref={mapView}
      zoomEnabled={true}
      onMapReady={goToInitialLocation}
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}>
      <MyMarker {...{coordinate}} />
      <Tracker />
      <NearestPoint />
      <Checkpoints
        DirectionsComponent={({checkpoints}) => (
          <Directions {...{checkpoints}} />
        )}
      />
    </MapView>
  ) : (
    <Activity />
  );
};
