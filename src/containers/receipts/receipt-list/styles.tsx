import {StyleSheet} from 'react-native';
import Colors from '../../../constants/colors';
import globalStyles from '../../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    margin: 15,
  },
  receipt: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 15,
    ...globalStyles.defaultShadow,
    marginBottom: 15,
  },
  header: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: Colors.BLACK_TRANSPARENT,
    borderBottomWidth: 0.5,
  },
});

export default styles;
