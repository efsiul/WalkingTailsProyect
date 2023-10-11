import {StyleSheet}       from  'react-native';
import { ColorsStyle } from './ColorsStyle';
import { box_height } from './DimensionStyle';


export const HomeStyles = StyleSheet.create({

  container                     : {
    flex                    : 2,
    flexDirection           : 'column',
    backgroundColor         : ColorsStyle.secundary,

  },
  box                           : {
    height                  : box_height,
  },
  boxHeader                     : {
    flex                    : 0.5,
    width                   : '100%',
    height                  : 150,
    alignItems              : 'center',

  },
  boxBody                       : {
    flex                    : 1,
    alignSelf               : 'center',
    height                  : '80%',
  },

  boxFooter                     : {
    flex                    : 0.5,
    height                  : 200,
  },

  containerTitle                : {
    backgroundColor         : ColorsStyle.primary,
    justifyContent          : 'center',
    alignItems              : 'center',
    borderTopLeftRadius     : 20,
    borderTopRightRadius    : 20,
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
    top                     : 0,
  },

  containerButtons              : {
    width                   : '100%',
    flexDirection           : 'row',
    alignSelf               : 'center',
    justifyContent          : 'space-evenly',
    margin                  : '2%',
  },

  button                        : {
    width                   : 120,
    height                  : 100,
    backgroundColor         : ColorsStyle.tertiary,
    borderColor             : ColorsStyle.borderTertiary,
    justifyContent          : 'center',
    borderRadius            : 20,
    borderWidth             : 1.5,
    alignItems              : 'center',
  },

  buttonHorizontal              : {
    width                   : 300,
    height                  : 100,
    backgroundColor         : ColorsStyle.tertiary,
    borderColor             : ColorsStyle.borderTertiary,
    justifyContent          : 'center',
    borderRadius            : 20,
    borderWidth             : 1.5,
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
