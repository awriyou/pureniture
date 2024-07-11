import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  cover: {
    height: SIZES.height / 2.4,
    width: SIZES.width - 60,
    resizeMode: 'contain',
    marginBottom: SIZES.xxLarge,
  },
  title: {
    fontFamily: 'Bold',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: SIZES.xxLarge,
  },
  wrapperForm: {
    marginBottom: 20,
    // marginHorizontal: 20,
  },
  label: {
    fontFamily: 'regular',
    fontSize: SIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: 'right',
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    borderWidth: 1,
    backgroundColor: COLORS.lightWhite,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  }),
  iconStyle: {
    marginRight: 10,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: 'regular',
    fontSize: SIZES.xSmall,
    marginTop: 5,
    marginLeft: 5,
  },
  registration: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default styles;
