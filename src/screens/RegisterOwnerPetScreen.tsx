import React,{
    useEffect,
    useState  
    }                       from 'react';
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
    pets_name       :   yup.string().required('*Campo requerido'),
    race            :   yup.string().required('*Campo requerido'),
    age_pet         :   yup.string().required('*Campo requerido'),
    password        :   yup.string().required('*Campo requerido'),
});


interface Props extends StackScreenProps<any, any> { }

export const RegisterOwnerPetScreen = ({ navigation }: Props) => {
    useEffect(() => {
        fetchBreeds();
    }, []);

    const [showModal, setShowModal]             = useState(false);
    const [showList, setShowList]               = useState(true);
    const [selectedRace, setSelectedRace]       = useState('');
    const [breeds, setBreeds]                   = useState<string[]>([]); 
    const [filteredBreeds, setFilteredBreeds]   = useState<string[]>([]);
    
    const fetchBreeds                           = async () => {
        try {
                const response      = await fetch('https://dog.ceo/api/breeds/list/all');
                const data          = await response.json();
                const breedsList    = Object.keys(data.message);
                setBreeds(breedsList);
            } catch (error) {
                console.error('Error al obtener las razas de perros', error);
            }
    };
    
    const handleTextChange                      = (text: string) => {
        const filtered = breeds.filter((breed) =>
            breed.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredBreeds(filtered);
        setSelectedRace(text); // Actualiza el estado de raza seleccionada
    };
    
    return (
        <>
            <View style = {LoginStyles.container}>
                <View style = {[LoginStyles.box, LoginStyles.boxBody]}>
                    <Formik
                        initialValues       =   {{
                            email               : '',
                            name_owner          : '',
                            last_name_owner     : '',
                            pets_name           : '',
                            race                : '',
                            age_pet             : '',
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
                                            placeholder             =   "Pet name"
                                            onChangeText            =   {handleChange('pets_name')}
                                            onBlur                  =   {handleBlur('pets_name')}
                                            value                   =   {values.pets_name}
                                            keyboardType            =   "default"
                                        />
                                        {errors.pets_name && touched.pets_name &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.pets_name}</Text>)}
                                    </View>
                                    <View>
                                        <TextInput
                                            style                   = {LoginStyles.inputText}
                                            placeholderTextColor    = {ColorsStyle.placeholderColor}
                                            placeholder             = "Race"
                                            onChangeText            = {handleTextChange}
                                            onBlur                  = {handleBlur('race')}
                                            value                   = {selectedRace} // Utiliza el estado de raza seleccionada
                                        />
                                        {showList &&(<FlatList
                                            data                    = {filteredBreeds}
                                            keyExtractor            = {(item) => item}
                                            renderItem              = {({ item }) => (
                                                                        <TouchableOpacity
                                                                            style       =   {LoginStyles.button}
                                                                            onPress     =   {() => {setSelectedRace(item);
                                                                                                    setShowList(false);
                                                                                                    {values.race=item}}}
                                                                        >
                                                                            <Text style =   {LoginStyles.txtBtn}>{item}</Text>
                                                                        </TouchableOpacity>
                                                                    )}
                                        />)}
                                        
                                        {errors.race && touched.race &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.race}</Text>)}
                                    </View>
                                    <View>
                                        <TextInput
                                            style                   =   {LoginStyles.inputText}
                                            placeholderTextColor    =   {ColorsStyle.placeholderColor}
                                            placeholder             =   "Age your pet"
                                            onChangeText            =   {handleChange('age_pet')}
                                            onBlur                  =   {handleBlur('age_pet')}
                                            value                   =   {values.age_pet}
                                            keyboardType            =   "default"
                                        />
                                        {errors.race && touched.race &&
                                            (<Text style    =   {LoginStyles.errorText}>{errors.race}</Text>)}
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

export default RegisterOwnerPetScreen;
