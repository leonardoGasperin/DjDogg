import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigation from './app/navigation/AppNavigator';

export default function App(){
    return(
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    )
}