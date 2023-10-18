
import React                    from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ColorsStyle}            from '../../style/ColorsStyle';
import LoginScreen              from '../../screens/LoginScreen';
import RegisterOwnerPetScreen           from '../../screens/RegisterOwnerPetScreen';
import { ProfileScreen }        from '../../screens/ProfileScreen';
import PlanningScreen from '../../screens/PlanningScreen';
import { RegisterTypeScreen } from '../../screens/RegisterTypeScreen';
import RegisterWalkerScreen from '../../screens/RegisterWalkerScreen';

export type RootStackParams = {
    LoginScreen          : undefined;
    RegisterScreen       : undefined;
    ProfileScreen        : undefined;
    PlanningScreen       : undefined;
};

const Stack = createStackNavigator();

const StackNavigatorHGM = () => {
    return (
        <Stack.Navigator
            initialRouteName  = "LoginScreen"
            screenOptions={{
                headerStyle: {
                    elevation       : 3,
                    shadowColor     : 'transparent',
                },
                cardStyle: {
                    backgroundColor : ColorsStyle.secundary,
                },
            }}>
            <Stack.Screen
                name        = "LoginScreen"
                options     = {{title: 'Login'}}
                component   = {LoginScreen}
            />
            <Stack.Screen
                name        = "RegisterTypeScreen"
                options     = {{title: 'RegisterTypeScreen'}}
                component   = {RegisterTypeScreen}
            />
            <Stack.Screen
                name        = "RegisterOwnerPetScreen"
                options     = {{title: 'RegisterOwnerPetScreen'}}
                component   = {RegisterOwnerPetScreen}
            />
            <Stack.Screen
                name        = "RegisterWalkerScreen"
                options     = {{title: 'RegisterWalkerScreen'}}
                component   = {RegisterWalkerScreen}
            />
            <Stack.Screen
                name        = "ProfileScreen"
                options     = {{title: 'Perfil'}}
                component   = {ProfileScreen}
            />
            <Stack.Screen
                name        = 'PlanningScreen'
                options     = {{title:'Viaje'}}
                component   ={PlanningScreen}
            />

            </Stack.Navigator>

    );
};

export default StackNavigatorHGM;
