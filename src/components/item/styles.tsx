import {AppState, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    ...globalStyles.defaultShadow,
    padding: 15,
  },
  label: {
    paddingHorizontal: 15,
    fontSize: 15,
  },
  itemHeader: {
    borderBottomColor: Colors.BLACK_TRANSPARENT,
    // borderBottomWidth: 1,
    paddingBottom: 10,
    // marginBottom: 10,
  },
  itemIcon: {
    color: Colors.PRIMARY_COLOR,
    fontSize: 17,
  },
  otherForms: {
    borderTopColor: Colors.BLACK_TRANSPARENT,
    borderTopWidth: 0.3,
    marginTop: 10,
    paddingTop: 10,
  },
  share: {
    marginTop: 10,
    paddingTop: 10,
    borderTopColor: Colors.BLACK_TRANSPARENT,
    borderTopWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
