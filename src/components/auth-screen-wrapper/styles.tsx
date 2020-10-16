import {StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    flex: 0.6,
    alignItems: 'stretch',
    backgroundColor: Colors.WHITE,
  },
  contentContainer: {
    flex: 0.4,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  logoBackground: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    left: '50%',
    bottom: '25%',
    marginLeft: -(150 / 2),
  },
});
export default styles;
