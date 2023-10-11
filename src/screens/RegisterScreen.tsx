import React, { useState }      from 'react';
import { StackScreenProps }     from '@react-navigation/stack';
import { Formik }               from 'formik';
import * as yup                 from 'yup';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
}                               from 'react-native';
import { ColorsStyle }          from '../style/ColorsStyle';
import { LoginStyles } from '../style/LoginStyle';




// Mensajes de Validación del Formulario
const login_validation_schema = yup.object().shape({
    entity_name         :   yup.string().required('*Campo requerido'),
    worker_document     :   yup.number().required('*Campo requerido'),
});


interface Props extends StackScreenProps<any, any> { }

export const RegisterHGMScreen = ({ navigation }: Props) => {
    const [showModal, setShowModal]    = useState(false);

    return (
        <>
            <View style = {LoginStyles.container}>
                <View style = {[LoginStyles.box, LoginStyles.boxBody]}>
                    <Formik
                        initialValues       =   {{
                            canal               : 'HGM',
                            worker_document         : '',


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
                                    <TextInput
                                        style                   =   {LoginStyles.inputText}
                                        placeholderTextColor    =   {ColorsStyle.placeholderColor}
                                        placeholder             =   "Digite su número de documento:"
                                        onChangeText            =   {handleChange('worker_document')}
                                        onBlur                  =   {handleBlur('worker_document')}
                                        value                   =   {values.worker_document}
                                        keyboardType            =   "default"
                                    />
                                    {errors.worker_document && touched.worker_document &&
                                        (<Text style    =   {LoginStyles.errorText}>{errors.worker_document}</Text>)}

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
                                        <Text style = {LoginStyles.textFooter}> Linea de Vida HGM </Text>
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

export default RegisterHGMScreen;
