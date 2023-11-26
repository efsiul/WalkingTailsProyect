/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useEffect,
    useState,
    }                           from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image}                 from 'react-native';
import { DrawerScreenProps }    from '@react-navigation/drawer';
import { IconOptionsApp }       from '../style/IconOptionsApp';
import { HomeStyles }           from '../style/HomeStyle';
import { ModalInfo }            from '../components/ModalInfo';
import { ColorsStyle } from '../style/ColorsStyle';

interface Props extends DrawerScreenProps<any, any>{}



export const HomeScreen = ({ navigation }: Props) => {
    const [showModal, setShowModal]     = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title                       : 'WALKING TAILS',
            headerTitleAlign            : 'center',
            headerStatusBarHeight       : 10,
            headerTintColor             : ColorsStyle.secundary,
            headerStyle: {
                backgroundColor     : ColorsStyle.primary,
                elevation           : 20,
                shadowOpacity       : 20,
                borderBottomWidth   : 1,
            },
            headerTitleStyle: {
                fontFamily          : 'Geneva',
                fontSize            : 30,
                fontWeight          : 'bold',
                color               : ColorsStyle.secundary,
            },

        }
        );
    }, []);


    return (

        <ImageBackground
        source={require('../assets/imageBackground.jpeg')}
        style={HomeStyles.container}
        >
            <View style   = {[HomeStyles.box, HomeStyles.boxHeader]}>
                <Image
                    source= {require('../assets/logo.png')}
                    style = {HomeStyles.image}
                />
            </View>
            <ScrollView>
 
                <View style = {[HomeStyles.box, HomeStyles.boxBody]}>
                    <View style = {HomeStyles.containerGroupButtons}>
                        <View style = {HomeStyles.containerButtons}>
                            <View>
                                <TouchableOpacity
                                    style   = { HomeStyles.button}
                                    onPress = { ()=> {
                                            navigation.navigate('LoginScreen');}
                                        }
                                >
                                    {IconOptionsApp('perro')}
                                    <Text style ={HomeStyles.textButton}> Login </Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity
                                    style   = { HomeStyles.button}
                                    onPress = { ()=> navigation.navigate('RegisterTypeScreen')}
                                >
                                    {IconOptionsApp('BUSQUEDA')}
                                    <Text style ={HomeStyles.textButton}> Tipo de registro </Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style = {HomeStyles.containerButtons}>
                            <View>
                                    <TouchableOpacity
                                        style   = { HomeStyles.buttonHorizontal}
                                        onPress = { ()=> {
                                                        setShowModal(true);
                                        }}
                                    >
                                        <Text style ={HomeStyles.textButton}> Información de servicio </Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <ModalInfo show={showModal} onClose = {() => setShowModal(false)}/>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </ImageBackground>
    );
};
