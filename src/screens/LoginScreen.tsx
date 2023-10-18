import React, {useState }     from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  }                           from 'react-native';
import { StackScreenProps }   from '@react-navigation/stack';
import { Formik }             from 'formik';
import * as yup               from 'yup';
import { LoginStyles }        from '../style/LoginStyle';
import { ColorsStyle }        from '../style/ColorsStyle';



const Separator = () => <View style={LoginStyles.separator} />;

const loginValidationSchema = yup.object().shape({
  email               :   yup.string().required('*Campo requerido').email('Ingresa un correo válido').max(255,'Maximo 255 caracteres'),
  password            :   yup.string().required('*Campo requerido').min(5,'Mínimo 5 caracteres'),
});

interface Props extends StackScreenProps<any, any> { }



const LoginScreen = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style = {LoginStyles.container}>
      <View style = {[LoginStyles.box, LoginStyles.boxBody]}>
        <Formik
          initialValues       =   {{
              email      : '',
              password   : '',
          }}
          validateOnMount     =   {true}
          validationSchema    =   {loginValidationSchema}
          onSubmit            =   {async () =>
            {
              //TODO: Implementar logica para ingresar
            }
          }>
        {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
        }) => (
          <ScrollView>
            <View  style = {LoginStyles.containerBody}>
              <Text style = {LoginStyles.textTitle}>Ingreso</Text>
              <Separator />
              <TextInput
                  style                   =   {LoginStyles.inputText}
                  placeholder             =   "micorreo@micorreo.com"
                  placeholderTextColor    =   {ColorsStyle.placeholderColor}
                  onChangeText            =   {handleChange('email')}
                  onBlur                  =   {handleBlur('email')}
                  value                   =   {values.email}
                  keyboardType            =   "email-address"
              />
              {errors.email && touched.email &&
              (<Text style        =   {LoginStyles.errorText}>{errors.email}</Text>)}

              <TextInput
                  style                   =   {LoginStyles.inputText}
                  placeholder             =   "Contraseña"
                  placeholderTextColor    =   {ColorsStyle.placeholderColor}
                  onChangeText            =   {handleChange('password')}
                  onBlur                  =   {handleBlur('password')}
                  value                   =   {values.password}
                  secureTextEntry         =   {true}
                  returnKeyType           =   "go"
                  autoCorrect             =   {false}
              />
              {errors.password && touched.password &&
              (<Text style        =   {LoginStyles.errorText}>{errors.password}</Text>)}
              <View >
                <TouchableOpacity
                  style       =   {LoginStyles.button}
                  onPress     =   {async () => {values.email = values.email.toLowerCase();
                                          //TODO: Implementar logica para ingresar
                                          }}
                >
                  <Text style =   {LoginStyles.txtBtn}>
                    {isLoading ? 'Cargando...' : 'Aceptar'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style = {LoginStyles.containerBody}>
                <View style = {LoginStyles.containerButton}>
                  <View>
                    <Text style = {LoginStyles.textTitle}>Nuevo</Text>
                    <Separator />
                    <TouchableOpacity
                      style       =   {LoginStyles.button}
                      onPress     =   {() => navigation.navigate('RegisterTypeScreen')}
                    >
                      <Text style =   {LoginStyles.txtBtn}>Registrarse</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
            <View style = {[LoginStyles.box, LoginStyles.boxFooter]}>
              <View style = {LoginStyles.containerFooter}>
                <Text style = {LoginStyles.textFooter}> Walking Tails</Text>
              </View>
            </View>
          </ScrollView>)}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;
