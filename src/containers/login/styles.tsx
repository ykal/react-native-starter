import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoBackground: {
    flex: 1,
    width: null,
    height: null,
  },
  headerContainer: {
    flex: 0.6,
    alignItems: 'stretch',
    backgroundColor: Colors.WHITE,
  },
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    left: '50%',
    bottom: '25%',
    marginLeft: -(150 / 2),
  },
  contentContainer: {
    flex: 0.4,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagIcon: {
    width: 30,
    height: 15,
  },
  input: {
    paddingHorizontal: 10,
  },
  loginInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.BLACK_TRANSPARENT,
    borderWidth: 1,
    width: '70%',
    padding: 10,
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
