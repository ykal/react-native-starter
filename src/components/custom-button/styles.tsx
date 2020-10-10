import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  solid: {
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  ghost: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
  },
  container: {
    padding: 7,
    width: 200,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 20,
  },
  label: {
    fontSize: 17,
  },
  solidLabel: {
    color: Colors.WHITE,
  },
  ghostLabel: {
    color: Colors.PRIMARY_COLOR,
  },
});

export default styles;
