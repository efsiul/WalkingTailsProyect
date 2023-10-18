import {StyleSheet}     from 'react-native';
import { ColorsStyle }  from './ColorsStyle';
import { box_height }   from './DimensionStyle';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


export const HomeStyles = StyleSheet.create({

  container                     : {
    flexDirection           : 'column',
    backgroundColor         : ColorsStyle.secundary,
    height                  : '100%',


  },
  box                           : {
    height                  : box_height,
  },

  boxHeader                     : {
    bottom                  : '10%',
    width                   : '100%',
    height                  : '20%',
    alignItems              : 'center',
  },

  boxBody                       : {
    top                     : '35%',
    alignSelf               : 'center',
    height                  : '100%',
    paddingTop              : 100,
    paddingBottom           : '80%',

  },


  image              : {
    width             : 200,
    height            : 200,
    borderRadius      : 100,
  },

  containerTitle                : {
    backgroundColor         : ColorsStyle.primary,
    justifyContent          : 'center',
    alignItems              : 'center',
    borderTopLeftRadius     : 50,
    borderTopRightRadius    : 50,
    padding                 : 10,
    width                   : '90%',
  },

  textTitle                     : {
    fontSize                : 30,
    fontWeight              : 'bold',
    fontFamily              : 'Geneva',
    marginBottom            : 5,
    color                   : ColorsStyle.secundary,
    alignItems              : 'center',
  },

  containerGroupButtons         : {
    top                     : '0%',

  },

  containerButtons              : {
    width                   : '100%',
    flexDirection           : 'row',
    alignSelf               : 'center',
    justifyContent          : 'space-evenly',
    margin                  : '2%',
  },

  button                        : {
    width                   : 150,
    height                  : 65,
    backgroundColor         : ColorsStyle.tertiary,
    borderColor             : ColorsStyle.borderTertiary,
    justifyContent          : 'center',
    borderRadius            : 50,
    borderWidth             : 2,
    alignItems              : 'center',
  },

  buttonHorizontal              : {
    width                   : 300,
    height                  : 60,
    backgroundColor         : ColorsStyle.tertiary,
    borderColor             : ColorsStyle.borderTertiary,
    justifyContent          : 'center',
    borderRadius            : 50,
    borderWidth             : 2,
    alignItems              : 'center',
  },

  textButton                    : {
    fontSize                : 15,
    color                   : ColorsStyle.secundary,
    alignItems              : 'center',
    fontWeight              : 'bold',
    fontFamily              : 'Geneva',
  },

  containerFooter               : {
    backgroundColor         : ColorsStyle.primary,
    alignSelf               : 'center',
    justifyContent          : 'center',
    alignItems              : 'center',
    width                   : '90%',
    height                  : '80%',
    borderBottomLeftRadius  : 20,
    borderBottomRightRadius : 20,
  },

  textFooter                    : {
    fontSize                : 15,
    color                   : ColorsStyle.secundary,
    alignItems              : 'center',
  },

});
