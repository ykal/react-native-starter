import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topAction: {
    backgroundColor: Colors.WHITE,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 7,
  },
  content: {
    flex: 1,
    paddingTop: 7,
    paddingHorizontal: 15,
  },
});

export default styles;
