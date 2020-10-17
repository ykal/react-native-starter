import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  shipment: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    paddingBottom: 15,
    borderBottomColor: Colors.BLACK_TRANSPARENT,
    borderBottomWidth: 1,
  },
  mainIcon: {
    fontSize: 20,
    color: Colors.PRIMARY_COLOR,
    marginRight: 15,
  },
  metadataIcon: {
    fontSize: 17,
  },
  metadataButton: {
    width: 27,
    height: 27,
  },
  item: {
    backgroundColor: Colors.WHITE,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    borderRadius: 15,
    ...globalStyles.defaultShadow,
    paddingVertical: 15,
    marginVertical: 7,
  },
  items: {
    marginHorizontal: 30,
  },
});
export default styles;
