import React, {useEffect, useState} from 'react';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY_OLD} from 'react-native-dotenv';
import {useSelector} from 'react-redux';

export default React.memo(
  ({}) => {
    const [directions, setDirections] = useState([]);
    const checkpoints = useSelector(_ => _.map.checkpoints);

    useEffect(() => {
      if (checkpoints.length > 1) {
        const e = [];
        for (let i = 0; i < checkpoints.length - 1; i++) {
          e.push({
            origin: checkpoints[i].get('coordinates'),
            destination: checkpoints[i + 1].get('coordinates'),
          });
        }
        setDirections(e);
      }
    }, [checkpoints]);

    if (directions.length <= 1) {
      return null;
    }

    return directions.length
      ? directions.map(dir => (
          <MapViewDirections
            {...dir}
            resetOnChange={false}
            apikey={GOOGLE_MAPS_API_KEY_OLD}
            strokeWidth={2.4}
            strokeColor={'blue'}
          />
        ))
      : null;
  },
  () => false,
);
