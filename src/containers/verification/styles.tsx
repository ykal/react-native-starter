import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  input: {
    margin: 0,
    padding: 0,
  },
  loginInput: {
    alignItems: 'center',
    borderColor: Colors.BLACK_TRANSPARENT,
    borderWidth: 1,
    width: '70%',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 30,
    marginVertical: 15,
  },
  captionText: {
    color: Colors.GREY,
    fontSize: 13,
    width: 300,
    textAlign: 'center',
  },
  linkText: {
    color: Colors.PRIMARY_COLOR,
    textDecorationLine: 'underline',
  },
  loginButton: {
    marginTop: 15,
  },
  title: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
export default styles;
