import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  flagIcon: {
    width: 30,
    height: 15,
  },
  input: {
    padding: 0,
    margin: 0,
    paddingHorizontal: 10,
  },
  loginInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.BLACK_TRANSPARENT,
    borderWidth: 1,
    width: '70%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    marginVertical: 15,
  },
  captionText: {
    color: Colors.GREY,
    fontSize: 13,
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
