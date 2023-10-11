import { StyleSheet}    from 'react-native';
import { Colors}        from 'react-native/Libraries/NewAppScreen';
import { ColorsStyle } from './ColorsStyle';
import { box_height } from './DimensionStyle';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection   : 'column-reverse',
    width           : '100%',
    height          : '100%',
    backgroundColor : ColorsStyle.secundary,
  },
  box: {
    height: box_height,
  },
  boxBody: {
    flex            : 10,
    justifyContent  : 'center',
  },
  boxFooter: {
    flex            : 1,
  },
  containerBody : {
    backgroundColor : ColorsStyle.tertiary,
    alignSelf       : 'center',
    borderRadius    : 20,
    width           : '90%',
    margin          : 10,
  },
  form        : {
    color             : Colors.black,
    fontSize          : 18,
    marginTop         : 20,
    fontWeight        : '600',
    padding           : 4,
    paddingRight      : 12,
    textAlign         : 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Geneva',
    marginBottom: 20,
    marginTop   : 10,
},
  separator: {
    marginVertical: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
},
  inputText        : {
    color             : Colors.dark,
    backgroundColor   : ColorsStyle.secundary,
    fontSize          : 18,
    marginTop         : 20,
    marginLeft        : 20,
    marginRight       : 20,
    fontWeight        : '600',
    paddingLeft       : 20,
    borderWidth       : 1,
    borderRadius      : 7,
    borderColor       : Colors.black,
    paddingRight      : 12,
  },
  containerButton: {
    flexDirection     : 'row',
    justifyContent    : 'center',
    },
  button          : {
    borderWidth       : 1,
    borderColor       : ColorsStyle.borderQuaternary,
    backgroundColor   : ColorsStyle.primary,
    padding           : 10,
    margin            : 10,
    width             : 150,
    alignSelf         : 'center',
    borderRadius      : 30,
  },
  txtBtn       : {
    color             : ColorsStyle.secundary,
    fontSize          : 20,
    textAlign         : 'center',
  },
  errorText         : {
    fontSize          : 14,
    fontWeight        : 'bold',
    color             : ColorsStyle.secundary,
    marginBottom      : 20,
    marginLeft        : 20,
  },

  checkBoxContainer : {
    flexDirection     : 'row',
  },

  checkbox          : {
    alignSelf         : 'center',
  },

  label             : {
    color             : Colors.dark,
    fontSize          : 18,
    marginLeft        : 20,
    marginRight       : 20,
    marginTop           : 10,
  },
  containerFooter : {
    backgroundColor : ColorsStyle.primary,
    justifyContent  : 'center',
    alignItems      : 'center',
    //marginTop       : 50,
    width           : '100%',
    height          : 50,
  },
  textFooter          : {
    fontSize        : 15,
    marginBottom    : 10,
    color           : ColorsStyle.secundary,
    alignItems      : 'center',
  },
  //Style Modal
  modalContainer              : {
    flex              : 1,
    alignItems        : 'center',
    justifyContent    : 'flex-end',
    marginBottom      : 50,
  },

  modalBackground             : {
    backgroundColor   : ColorsStyle.secundary,
    padding           : 20,
  },

  textModal                   : {
    color             : ColorsStyle.primary,
    fontWeight        : '600',
    fontSize          : 15,
    marginBottom      : 20,
    marginLeft        : 20,
  },
});
