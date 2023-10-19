/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import { Image } from 'react-native-elements';
import { HomeScreen } from '../../screens/HomeScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import LoginScreen from '../../screens/LoginScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';
import { DrawerStyles } from '../../style/DrawerNavigatorStyle';
import { ColorsStyle } from '../../style/ColorsStyle';
import { IconOptionsApp } from '../../style/IconOptionsApp';
import {PlanningScreen} from '../../screens/PlanningScreen';
import RideScreen from '../../screens/RideScreen';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno {...props} />}
            screenOptions={
                {
                    drawerType: width >= 768 ? 'permanent' : 'front',
                    drawerStyle: { width: 220, backgroundColor: ColorsStyle.primary },

                }
            }
        >
            <Drawer.Screen
                name="HomeScreen"
                options={{ title: '' }}
                component={HomeScreen}
            />
            <Drawer.Screen
                name="LoginScreen"
                options={{ title: '' }}
                component={LoginScreen}
            />
            <Drawer.Screen
                name="ProfileScreen"
                options={{ title: 'Perfil' }}
                component={ProfileScreen}
            />

            <Drawer.Screen
                name="RegisterScreen"
                options={{ title: 'Registro' }}
                component={RegisterScreen}
            />

            <Drawer.Screen
                name='PlanningScreen'
                options={{ title: 'Viaje' }}
                component={PlanningScreen}
            />

            <Drawer.Screen
                name='RideScreen'
                options={{ title: 'Paseador' }}
                component={RideScreen}
            />

        </Drawer.Navigator>

    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    const [showModal, setShowModal] = useState(false);


    return (

        <DrawerContentScrollView>
            <View style={DrawerStyles.container}>

                {/* Opciones del avatar */}
                <View style={[DrawerStyles.box, DrawerStyles.boxHeader]}>
                    <View style={DrawerStyles.containerAvatar}>
                        <Image
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }}
                            style={DrawerStyles.avatar}
                        />
                    </View>

                    <View >
                        <Text > Nombre de usuario </Text>
                    </View>
                </View>

                {/* Opciones del menu */}
                <View style={[DrawerStyles.box, DrawerStyles.boxBody]}>
                    <View style={DrawerStyles.containerButtons}>
                        <TouchableOpacity
                            style={DrawerStyles.button}
                            onPress={() => {
                                //TODO: Logica para cerrar sesion de usuario
                                navigation.navigate('HomeScreen');
                            }}
                        >
                            <View style={DrawerStyles.textIcon}>
                                {IconOptionsApp('pata')}
                                <Text style={DrawerStyles.text_botton}>
                                    Cerrar Sesión
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={DrawerStyles.button}
                            onPress={() => {
                                navigation.navigate('PlanningScreen')
                            }}
                        >
                            <View style={DrawerStyles.textIcon}>
                                {IconOptionsApp('pata')}
                                <Text style={DrawerStyles.text_botton}>
                                    Planear paseo
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <SafeAreaView style={DrawerStyles.containerButtons}>
                            <TouchableOpacity
                                style={DrawerStyles.button}
                                onPress={() => {
                                    setShowModal(true);
                                }}
                            >
                                <View style={DrawerStyles.textIcon}>
                                    {IconOptionsApp('pata')}
                                    <Text style={DrawerStyles.text_botton}>
                                        Registro
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            {showModal &&
                                <View >
                                    <View>
                                        <Text style={DrawerStyles.titleSetButton}> Tipo de Usuario </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={DrawerStyles.subButton}
                                            onPress={() => {
                                                setShowModal(false);
                                                navigation.navigate('RegisterPaseador');
                                            }}
                                        >
                                            <Text style={DrawerStyles.text_botton}>Paseador</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={DrawerStyles.subButton}
                                            onPress={() => {
                                                setShowModal(false);
                                                navigation.navigate('RegisterDueno');
                                            }}
                                        >
                                            <Text style={DrawerStyles.text_botton}>Dueño de mascota</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                        </SafeAreaView>

                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

export default DrawerNavigator;
