
import Parse from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const checkPointSearch = async name => {
  try {
    const query = new Parse.Query('Checkpoint');
    query.startsWith('name', name);
    return query.find();
  } catch (e) {
    reactotron.logImportant({e});
  }
};
