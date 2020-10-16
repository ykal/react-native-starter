import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK_TRANSPARENT7,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  contentContainer: {
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    width: '100%',
    padding: 15,
    ...globalStyles.defaultShadow,
  },
  colseButton: {
    width: 25,
    height: 25,
  },
  header: {
    alignItems: 'flex-end',
  },
});
export default styles;
