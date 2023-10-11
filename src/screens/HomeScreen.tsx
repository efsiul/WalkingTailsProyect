/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useEffect,
    useState,
    }                           from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView}                 from 'react-native';
import { DrawerScreenProps }    from '@react-navigation/drawer';
import { IconOptionsApp }       from '../style/IconOptionsApp';
import { HomeStyles }           from '../style/HomeStyle';
import { ModalInfo }            from '../components/ModalInfo';


interface Props extends DrawerScreenProps<any, any>{}



export const HomeScreen = ({ navigation }: Props) => {
    const [showModal, setShowModal]     = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: 'Bienvenido',
            }
        );
    }, []);


    return (
        <View style = {HomeStyles.container}>
            <ScrollView>
                <View style = {[HomeStyles.box, HomeStyles.boxHeader]}>
                    <View style = {HomeStyles.containerTitle}>
                        <Text style = {HomeStyles.textTitle}>WALKING TAILS</Text>
                    </View>
                </View>
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
                                    {IconOptionsApp('HOSPITALES')}
                                    <Text style ={HomeStyles.textButton}> Login </Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity
                                    style   = { HomeStyles.button}
                                    onPress = { ()=> navigation.navigate('')}
                                >
                                    {IconOptionsApp('APH')}
                                    <Text style ={HomeStyles.textButton}> Registry </Text>
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
            <View style = {[HomeStyles.box, HomeStyles.boxFooter]}>
                <View  style = {HomeStyles.containerFooter}>
                    <Text  style = {HomeStyles.textFooter}> WALKING TAILS</Text>

                </View>
            </View>
        </View>
    );
};
