import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 15,
  },
  swipeRightButton: {
    position: 'absolute',
    left: -25,
    bottom: '50%',
    backgroundColor: 'rgba(241, 90, 39, 0.48)',
  },
  swipeLeftButton: {
    position: 'absolute',
    right: -25,
    bottom: '50%',
    backgroundColor: 'rgba(241, 90, 39, 0.48)',
  },
  bottomAction: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default styles;
