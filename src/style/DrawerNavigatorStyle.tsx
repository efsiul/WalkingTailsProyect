import {StyleSheet}   from  'react-native';
import { ColorsStyle }from './ColorsStyle';
import { box_height } from './DimensionStyle';
import { colors }     from 'react-native-elements';

export const DrawerStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection     : 'column',
    height            : '100%',
  },

  box: {
    height            : box_height,
  },
  boxHeader: {
    width             : '100%',
    height            : 150,
    backgroundColor   : ColorsStyle.primary,
    alignItems        : 'center',
    justifyContent    : 'center',
  },
  boxBody: {
    width             : '100%',
    height            : 500,
    // flex            : 10,
    backgroundColor   : ColorsStyle.secundary,
    alignItems        : 'center',

  },
  containerAvatar : {
    width             : '100%',
    height            : '70%',
    justifyContent    : 'center',
    alignItems        : 'center',
  },
  avatar              : {
    width             : 100,
    height            : 100,
    borderRadius      : 100,
  },
  textAvatar      : {
    fontSize          : 20,
    color             : ColorsStyle.secundary,
    alignItems        : 'center',
  },
  containerButtons: {
    width             : '100%',
    alignItems        : 'center',
  },

  textIcon        : {
    flexDirection     : 'row',

  },
  titleSetButton  : {
    color             : colors.black,
    fontWeight        : '800',
    fontSize          : 18,
    marginTop         : 5,
    marginBottom      : 5,
    paddingHorizontal : 5,
    textAlign         : 'justify',
  },
  button          : {
    width             : '90%',
    height            : 50,
    borderColor       : ColorsStyle.borderQuaternary,
    backgroundColor   : ColorsStyle.quaternary,
    justifyContent    : 'center',
    borderRadius      : 20,
    borderWidth       : 2,
    alignItems        : 'stretch',
    marginVertical    : 5,
  },
  subButton     : {
    borderWidth       : 2,
    borderColor       : ColorsStyle.borderQuaternary,
    backgroundColor   : ColorsStyle.quaternary,
    padding           : 5,
    marginBottom      : 10,
    marginLeft        : 10,
    marginRight       : 10,
    borderRadius      : 30,
  },
  text_botton   : {
    fontSize          : 15,
    color             : ColorsStyle.secundary,
    alignItems        : 'center',
    paddingLeft       : 50,
  },
});
