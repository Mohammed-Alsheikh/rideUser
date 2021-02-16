import AsyncStorage from '@react-native-community/async-storage';
import {Parse} from 'parse/react-native';
import {
  PARSE_API_URL,
  PARSE_WS_URL,
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY,
  PARSE_MASTER_KEY,
  Back4app_API_URL,
  Back4app_WS_URL,
  Back4app_APPLICATION_ID,
  Back4app_JAVASCRIPT_KEY,
  Back4app_MASTER_KEY,
} from 'react-native-dotenv';

const Init_Parse = () => {
  Parse.setAsyncStorage(AsyncStorage);
  Parse.serverURL = PARSE_API_URL;
  // Parse.liveQueryServerURL = "ws://ride.back4app.io";
  Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
};

const Init_Parse_B4A = () => {
  Parse.setAsyncStorage(AsyncStorage);
  Parse.serverURL = 'https://ride.back4app.io';
  // Parse.liveQueryServerURL = "ws://ride.back4app.io";
  Parse.initialize(
    'ePp2AvQTCXc40Og3bGhosc2JN4iHqQKCZfo40wWn',
    'L6D1xYHRqErTBVfdZWeNiYu2qpFl3kgHMJUDODpS',
    'h1OBthQvv1Z2ozPKYRQCUOfyJUO8zfQZLNmlOD5L',
  );
};

export default Init_Parse;
