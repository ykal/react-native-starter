import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 15,
  },
  swipeRightButton: {
    position: 'absolute',
    left: -25,
    bottom: '50%',
    backgroundColor: 'rgba(241, 90, 39, 0.48)',
  },
  swipeLeftButton: {
    position: 'absolute',
    right: -25,
    bottom: '50%',
    backgroundColor: 'rgba(241, 90, 39, 0.48)',
  },
  bottomAction: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  itemImage: {
    width: 100,
    height: 100,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    ...globalStyles.defaultShadow,
  },
  icon: {
    fontSize: 40,
    color: Colors.PRIMARY_COLOR,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default styles;
