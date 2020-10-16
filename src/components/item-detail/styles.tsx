import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 30,
  },
  itemImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    backgroundColor: Colors.WHITE,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    ...globalStyles.defaultShadow,
  },
  image: {
    width: 70,
    height: 70,
  },
  info: {
    marginVertical: 10,
  },
  metadataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  metadataIcon: {
    color: Colors.BLACK,
    marginRight: 10,
  },
  metadataTitle: {
    fontSize: 15,
    color: Colors.BLACK,
  },
  metadataValue: {
    fontSize: 13,
    color: Colors.GREY,
  },
  infoTitle: {
    color: Colors.PRIMARY_COLOR,
  },
  button: {
    width: 100,
  },
  actions: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
