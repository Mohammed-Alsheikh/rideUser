import React, {useCallback} from 'react';
import {Snackbar, Modal, Portal} from 'react-native-paper';
import styles, {colorsArray} from './styles';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '@lib/index';
import {useSelector, useDispatch} from 'react-redux';
import Types from '@types/index';
import SnackTypes from '@types/snack';

export default ({}) => {
  const dispatch = useDispatch();
  const {visible, type, onCancel, onConfirm} = useSelector(_ => _.snackbar);
  const {distance, duration} = useSelector(_ => _.map);

  const onDismiss = useCallback(
    () =>
      dispatch({
        type: Types.SET_SNACK_STATE,
        payload: {visible: false},
      }),
    [dispatch],
  );

  switch (type) {
    case SnackTypes.confirmation:
      return (
        <Portal>
          <Modal
            visible={visible}
            onDismiss={onDismiss}
            contentContainerStyle={styles.modal}>
            <Text textAlign="center" style={styles.detailText}>
              {'سيتم عرض الحافلات الخاصة بهذا الموقف'}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                title="موافق"
                type="outline"
                containerStyle={{paddingVertical: 20, right: 20}}
                buttonStyle={styles.buttonsnack}
                titleStyle={{color: '#fff'}}
                onPress={onConfirm}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: colorsArray,
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
              <Button
                title="الغاء"
                type="outline"
                containerStyle={{paddingVertical: 20, left: 20}}
                buttonStyle={styles.buttonsnack1}
                titleStyle={{color: '#fff'}}
                onPress={() => onDismiss() && (onCancel && onCancel())}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: colorsArray,
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
            </View>
          </Modal>
        </Portal>
      );
    case SnackTypes.welcome:
      return (
        <Snackbar
          visible={visible}
          style={styles.Snack}
          onDismiss={onDismiss}
          action={{
            label: 'الغاء',
            onPress: () => onCancel && onCancel(),
          }}>
          <Text textAlign="center" style={styles.detailText}>
            {' '}
            اهلا{'\n'}
            يمكنك البدء بأستخدام التطبيق من خلال{'\n'}
            أختيار موقف وذلك بالنقر على احدى العلامات بالخريطة او من خلال البحث
            عن اسم الموقف{'\n'}
          </Text>
        </Snackbar>
      );
    case SnackTypes.leaveTrip:
      return (
        <Portal>
          <Modal
            visible={visible}
            onDismiss={onDismiss}
            contentContainerStyle={styles.modal}>
            <Text textAlign="center" style={styles.detailText}>
              {'هل انت متأكد من انهاء الحجز؟؟'}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                title="موافق"
                type="outline"
                containerStyle={{paddingVertical: 20, right: 20}}
                buttonStyle={styles.buttonsnack}
                titleStyle={{color: '#fff'}}
                onPress={() => onDismiss() && (onConfirm && onConfirm())}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: colorsArray,
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
              <Button
                title="الغاء"
                type="outline"
                containerStyle={{paddingVertical: 20, left: 20}}
                buttonStyle={styles.buttonsnack1}
                titleStyle={{color: '#fff'}}
                onPress={() => onDismiss() && (onCancel && onCancel())}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: colorsArray,
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
            </View>
          </Modal>
        </Portal>
      );
    case SnackTypes.confirmTracking:
      return (
        <Portal>
          <Modal
            visible={visible}
            onDismiss={onDismiss}
            contentContainerStyle={styles.modal}>
            <Text textAlign="center" style={styles.detailText}>
              {'انت على وشك حجز مقعد في هذا'}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                title="موافق"
                type="outline"
                containerStyle={{paddingVertical: 20, right: 20}}
                buttonStyle={styles.buttonsnack}
                titleStyle={{color: '#fff'}}
                onPress={() => onDismiss() && (onConfirm && onConfirm())}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: colorsArray,
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
              <Button
                title="الغاء"
                type="outline"
                containerStyle={{paddingVertical: 20, left: 20}}
                buttonStyle={styles.buttonsnack1}
                titleStyle={{color: '#fff'}}
                onPress={() => onDismiss() && (onCancel && onCancel())}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: colorsArray,
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
            </View>
          </Modal>
        </Portal>
      );
    case SnackTypes.approvedTrip:
      return (
        <Snackbar
          visible={visible}
          style={{...styles.Snack, padding: 0}}
          onDismiss={onDismiss}
          action={{
            label: 'تم',
            onPress: () => onCancel && onCancel(),
          }}>
          <Text textAlign="center" style={styles.detailText}>
            {'تمت عملية الجز بنجاح!!'}
            {'\n'}
            {` (${duration} min) الوقت المتوقع لأقرب نقطة علا الأقدام`}
            {'\n'}
            {` (${distance} km) المسافة لأقرب نقطة`}
          </Text>
        </Snackbar>
      );
    default:
      return null;
  }
};
