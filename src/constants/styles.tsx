import {StyleSheet} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: Colors.PRIMARY_COLOR,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: Colors.BLACK,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 2,
    shadowOpacity: 0.1,
  },
  iconButtonLabel: {
    fontSize: 24,
    color: Colors.WHITE,
  },
  headlineText: {
    color: Colors.PRIMARY_COLOR,
    fontSize: 20,
    padding: 7,
  },
  caption: {
    color: Colors.GREY,
    fontSize: 14,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 100,
    right: 15,
  },
  floatingButtonLabel: {
    fontSize: 40,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  zeroPaddign: {
    padding: 0,
  },
  formCard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 15,
    shadowColor: Colors.GREY,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
export default styles;
