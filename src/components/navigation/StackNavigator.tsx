
import React                    from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ColorsStyle}            from '../../style/ColorsStyle';
import LoginScreen              from '../../screens/LoginScreen';
import RegisterScreen           from '../../screens/RegisterScreen';
import { ProfileScreen }        from '../../screens/ProfileScreen';

export type RootStackParams = {
    LoginScreen          : undefined;
    RegisterScreen       : undefined;
    ProfileScreen        : undefined;
};

const Stack = createStackNavigator();

const StackNavigatorHGM = () => {
    return (
        <Stack.Navigator
            initialRouteName  = "ListCasesHGMScreen"
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
                name          = "LoginScreen"
                options       = {{title: 'Login'}}
                component     = {LoginScreen}
            />
            <Stack.Screen
                name          = "RegisterScreen"
                options       = {{title: 'Perfil'}}
                component     = {RegisterScreen}
            />
            <Stack.Screen
                name          = "ProfileScreen"
                options       = {{title: 'Perfil'}}
                component     = {ProfileScreen}
            />

            </Stack.Navigator>

    );
};

export default StackNavigatorHGM;
