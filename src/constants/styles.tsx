import {StyleSheet} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: Colors.PRIMARY_COLOR,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: Colors.BLACK,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 2,
    shadowOpacity: 0.1,
  },
  iconButtonLabel: {
    fontSize: 24,
    color: Colors.WHITE,
  },
  headlineText: {
    color: Colors.PRIMARY_COLOR,
    fontSize: 20,
    padding: 7,
  },
  caption: {
    color: Colors.GREY,
    fontSize: 14,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 10,
    right: 15,
  },
  floatingButtonLabel: {
    fontSize: 40,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  zeroPaddign: {
    padding: 0,
  },
  formCard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 15,
    shadowColor: Colors.GREY,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  defaultShadow: {
    shadowColor: Colors.GREY,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 2,
    shadowOpacity: 0.2,
  },
  subHeadingText: {
    color: Colors.BLACK,
    fontSize: 17,
  },
  subHeadingIcon: {
    color: Colors.PRIMARY_COLOR,
    fontSize: 20,
  },
  captionIcon: {
    color: Colors.GREY,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomActions: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    shadowColor: Colors.GREY,
    shadowRadius: 20,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 20,
    shadowOpacity: 0.2,
  },
  horizontalSpaceBetween: {
    justifyContent: 'space-between',
  },
  primaryText: {
    color: Colors.PRIMARY_COLOR,
  },
  green: {
    color: Colors.GREEN,
  },
  alignEndHorizontal: {
    justifyContent: 'flex-end',
  },
  marginRight: {
    marginRight: 10,
  },
  marginTop: {marginTop: 10},
});
export default styles;
