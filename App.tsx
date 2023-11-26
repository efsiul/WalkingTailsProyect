/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/components/navigation/DrawerNavigation';
import { AppStateProvider } from './src/context/AppStateContext';



const App = () => {


  return (
    <AppStateProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AppStateProvider>

  );
};


export default App;
