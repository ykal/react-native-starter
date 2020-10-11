import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    padding: 15,
    justifyContent: 'space-between',
  },
});
export default styles;
