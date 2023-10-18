import React, { useState }  from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Formik }           from 'formik';
import * as yup             from 'yup';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    FlatList,
}                           from 'react-native';
import { ColorsStyle }      from '../style/ColorsStyle';
import { LoginStyles }      from '../style/LoginStyle';




// Mensajes de Validación del Formulario
const login_validation_schema = yup.object().shape({
    email           :   yup.string().required('*Campo requerido'),
    name_owner      :   yup.string().required('*Campo requerido'),
    last_name_owner :   yup.string().required('*Campo requerido'),
    password        :   yup.string().required('*Campo requerido'),
});


interface Props extends StackScreenProps<any, any> { }

export const RegisterWalkerScreen = ({ navigation }: Props) => {

    const [showModal, setShowModal]             = useState(false);

    return (
        <>
            <View style = {LoginStyles.container}>
                <View style = {[LoginStyles.box, LoginStyles.boxBody]}>
                    <Formik
                        initialValues       =   {{
                            email               : '',
                            name_owner          : '',
                            last_name_owner     : '',
                            password            : '',
                            password1           : '',
                        }}
                        validateOnMount     =   {true}
                        validationSchema    =   {login_validation_schema}
                        onSubmit            =   {(values) => {
                            navigation.navigate('Profile', {formValues: values});
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <ScrollView>
                                <View style = {LoginStyles.containerBody}>
                                    <View>
                                        <TextInput
                                            style                   =   {LoginStyles.inputText}
                                            placeholderTextColor    =   {ColorsStyle.placeholderColor}
                                            placeholder             =   "miemail@example.com"
                                            onChangeText            =   {handleChange('email')}
                                            onBlur                  =   {handleBlur('email')}
                                            value                   =   {values.email}
                                            keyboardType            =   "email-address"
                                        />
                                        {errors.email && touched.email &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.email}</Text>)}
                                    </View>
                                    <View>
                                        <TextInput
                                            style                   =   {LoginStyles.inputText}
                                            placeholderTextColor    =   {ColorsStyle.placeholderColor}
                                            placeholder             =   "My name"
                                            onChangeText            =   {handleChange('name_owner')}
                                            onBlur                  =   {handleBlur('name_owner')}
                                            value                   =   {values.name_owner}
                                            keyboardType            =   "default"
                                        />
                                        {errors.name_owner && touched.name_owner &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.name_owner}</Text>)}
                                    </View>
                                    <View>
                                        <TextInput
                                            style                   =   {LoginStyles.inputText}
                                            placeholderTextColor    =   {ColorsStyle.placeholderColor}
                                            placeholder             =   "My last name"
                                            onChangeText            =   {handleChange('last_name_owner')}
                                            onBlur                  =   {handleBlur('last_name_owner')}
                                            value                   =   {values.last_name_owner}
                                            keyboardType            =   "default"
                                        />
                                        {errors.last_name_owner && touched.last_name_owner &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.last_name_owner}</Text>)}
                                    </View>

                                    <View>
                                        <TextInput
                                            style                   =   {LoginStyles.inputText}
                                            placeholderTextColor    =   {ColorsStyle.placeholderColor}
                                            placeholder             =   "Password"
                                            onChangeText            =   {handleChange('password')}
                                            onBlur                  =   {handleBlur('password')}
                                            value                   =   {values.password}
                                            //asdfsdfkeyboardType            =   "visible-password"
                                            secureTextEntry         =   {true}
                                        />
                                        {errors.password && touched.password &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.password}</Text>)}
                                    </View>
                                    <View>
                                        <TextInput
                                            style                   =   {LoginStyles.inputText}
                                            placeholderTextColor    =   {ColorsStyle.placeholderColor}
                                            placeholder             =   "Repeat password"
                                            onChangeText            =   {handleChange('password1')}
                                            onBlur                  =   {handleBlur('password1')}
                                            value                   =   {values.password1}
                                            // keyboardType            =   "visible-password"
                                            secureTextEntry         =   {true}

                                        />
                                        {errors.password1 && touched.password1 &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.password1}</Text>)}
                                    </View>
                                    <View style = {LoginStyles.containerButton}>
                                        <View >
                                            <TouchableOpacity
                                                style       =   {LoginStyles.button}
                                                onPress     =   {() =>  navigation.navigate('HomeScreen', { handleSubmit, values, errors, touched },)}>
                                                <Text style =   {LoginStyles.txtBtn}>Atras</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View >
                                            <TouchableOpacity
                                                style       =   {LoginStyles.button}
                                                onPress     =   {() =>  {
                                                                if ( Object.values(values).some(value => value === '' || value === null) ) {
                                                                    setShowModal(true);
                                                                    return;
                                                                    }
                                                                        navigation.navigate('HomeScreen', { handleSubmit, values, errors, touched },)}}>
                                                <Text style =   {LoginStyles.txtBtn}>Enviar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View  style = {LoginStyles.containerBody}>
                                                                    
                                </View>
                                <View style = {[LoginStyles.box, LoginStyles.boxFooter]}>
                                    <View style = {LoginStyles.containerFooter}>
                                        <Text style = {LoginStyles.textFooter}> 'WALKING TAILS' </Text>
                                    </View>
                                </View>
                                <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={showModal}
                                        onRequestClose={() => setShowModal(false)}
                                        >
                                        <View style = {LoginStyles.modalContainer}>
                                            <View style = {LoginStyles.modalBackground}>
                                                <Text style = {LoginStyles.textModal}>Por favor verifique que todos los campos requeridos esten correctamente diligenciados</Text>
                                                <TouchableOpacity
                                                    style       =   {LoginStyles.button}
                                                    onPress={() => setShowModal(false)}
                                                >
                                                    <Text style =   {LoginStyles.txtBtn}>Cerrar</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                </Modal>
                            </ScrollView>
                        )}
                    </Formik>
                </View>
            </View>
        </>
    );
};

export default RegisterWalkerScreen;
