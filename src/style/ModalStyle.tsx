import {StyleSheet}     from 'react-native';
import { colors }       from 'react-native-elements';
import { ColorsStyle }  from './ColorsStyle';


export const ModalStyle = StyleSheet.create({
//Style Modal
  modalContainer              : {
    flex              : 1,
    alignItems        : 'center',
    justifyContent    : 'center',
    paddingHorizontal : 10,
  },

  modalBackground             : {
    backgroundColor   : ColorsStyle.secundary,
  },
  titleModal                   : {
    color             : colors.black,
    fontWeight        : '800',
    fontSize          : 20,
    marginTop         : 25,
    marginBottom      : 5,
    paddingHorizontal : 40,
    textAlign         : 'justify',
  },
  textModal                   : {
    color             : colors.black,
    fontWeight        : '500',
    fontSize          : 18,
    marginTop         : 10,
    marginBottom      : 40,
    paddingHorizontal : 30,
    textAlign         : 'justify',
  },
  botton                      : {
    borderWidth       : 1,
    borderColor       : ColorsStyle.borderQuaternary,
    backgroundColor   : ColorsStyle.quaternary,
    padding           : 15,
    marginBottom      : 20,
    marginLeft        : 20,
    marginRight       : 20,
    borderRadius      : 10,
  },

  txtBtn                      : {
    color             : ColorsStyle.secundary,
    fontSize          : 20,
    textAlign         : 'center',
  },
});
