import React,  {}           from 'react';
import  {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
  }                         from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { LoginStyles }      from '../style/LoginStyle';



const Separator = () => <View style={LoginStyles.separator} />;

interface Props extends StackScreenProps<any, any> { }

export const ProfileScreen =  ({ navigation }: Props) => {


  return (
    <View style = {LoginStyles.container}>
      <View style = {[LoginStyles.box, LoginStyles.boxBody]}>
        <ScrollView>
            <View  style = {LoginStyles.containerBody}>
              <Text  style={LoginStyles.textTitle}> Bienvenido </Text>
              <Separator />

            </View>
            <View style = {LoginStyles.containerBody}>
                <View style = {LoginStyles.containerButton}>
                  <View>
                    <Separator />
                  </View>
                  <View>
                    <View>
                      <Text style={LoginStyles.textTitle}>Entrar al Sistema</Text>
                      <Separator />
                      <TouchableOpacity
                        style       =   {LoginStyles.button}
                        onPress     =   {() =>  navigation.navigate('')}>
                        <Text style =   {LoginStyles.txtBtn}>Entrar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Text style={LoginStyles.textTitle}>Cerrar sesión</Text>
                    <Separator />
                    <TouchableOpacity
                      style       =   {LoginStyles.button}
                      onPress     =   {() =>  { //Implmentar logica para cerrar la cesión
                                                navigation.navigate('');}}>
                      <Text style =   {LoginStyles.txtBtn}>Cerrar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
            <View style = {[LoginStyles.box, LoginStyles.boxFooter]}>
              <View style = {LoginStyles.containerFooter}>
                <Text style = {LoginStyles.textFooter}> Linea de Vida HGM </Text>
              </View>
            </View>
          </ScrollView>
      </View>
    </View>
  );
};
