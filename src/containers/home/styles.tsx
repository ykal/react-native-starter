import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {
    padding: 15,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  secondaryText: {
    fontSize: 17,
    color: Colors.WHITE,
  },
  title: {
    fontSize: 24,
    color: Colors.WHITE,
    fontWeight: 'bold',
    marginTop: 15,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  center: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    ...globalStyles.defaultShadow,
    elevation: 50,
    shadowRadius: 50,
    ...globalStyles.center,
    padding: 7,
  },
});
export default styles;
