import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    margin: 15,
  },
  card: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 15,
    ...globalStyles.defaultShadow,
    marginVertical: 10,
    borderColor: 'red',
    // borderWidth: 1,
  },
  button: {
    width: 100,
    marginTop: 15,
    marginLeft: 20,
  },
  textInput: {
    borderBottomColor: Colors.BLACK_TRANSPARENT,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingBottom: 0,
  },
  orText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 7,
    fontSize: 17,
    opacity: 0.5,
  },
  image: {
    width: 80,
    height: 80,
  },
  bottomAction: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    ...globalStyles.defaultShadow,
    elevation: 10,
    shadowRadius: 50,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 15,
    marginTop: -25,
  },
  driverInfo: {
    paddingBottom: 20,
  },
});
export default styles;
