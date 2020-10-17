import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.defaultShadow,
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 15,
    marginVertical: 7,
  },
  mainIcon: {
    fontSize: 20,
    color: Colors.PRIMARY_COLOR,
    marginRight: 15,
  },
  green: {
    color: Colors.GREEN,
  },
  header: {
    borderBottomColor: Colors.BLACK_TRANSPARENT,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  subIcon: {
    fontSize: 13,
  },
  metadataIcon: {
    marginRight: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  metadata: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  blackText: {
    color: Colors.BLACK,
  },
  padding10: {
    paddingVertical: 5,
  },
});
export default styles;
