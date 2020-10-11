import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: Colors.GREY,
    marginBottom: 10,
  },
  textInput: {
    borderColor: Colors.BLACK_TRANSPARENT,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 7,
  },
});
export default styles;
