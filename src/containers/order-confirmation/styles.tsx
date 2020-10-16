import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    margin: 15,
    padding: 15,
  },
  action: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 40,
  },
  price: {
    marginTop: 15,
  },
  priceListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.BLACK_TRANSPARENT,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    color: Colors.PRIMARY_COLOR,
    fontSize: 15,
  },
  itemName: {
    fontSize: 15,
  },
});
export default styles;
