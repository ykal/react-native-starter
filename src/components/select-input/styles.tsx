import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  dropdownContainer: {
    height: 40,
  },
  dropdown: {
    borderColor: Colors.BLACK_TRANSPARENT,
  },
  item: {
    justifyContent: 'flex-start',
  },
  label: {
    color: Colors.GREY,
    marginBottom: 10,
    fontSize: 15,
  },
});
export default styles;
