import {StyleSheet} from 'react-native';
import Colors from '../../../constants/colors';
import globalStyles from '../../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    marginHorizontal: 15,
    padding: 15,
  },
  price: {
    ...globalStyles.center,
    marginVertical: 50,
  },
  bottomAction: {
    marginTop: 30,
    ...globalStyles.center,
  },
});
export default styles;
