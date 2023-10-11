/* eslint-disable react-hooks/exhaustive-deps */
import React                    from 'react';
import {NavigationContainer}    from '@react-navigation/native';
import DrawerNavigator          from './src/components/navigation/DrawerNavigation';



const App = ()=> {


  return (
    <NavigationContainer>
          <DrawerNavigator/>
    </NavigationContainer>
  );
};


export default App;
