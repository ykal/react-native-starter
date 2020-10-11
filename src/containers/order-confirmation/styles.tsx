import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    margin: 15,
    padding: 15,
  },
  action: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 40,
  },
});
export default styles;
