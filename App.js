import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import AudioProvider from './app/context/AudioProvider';
import AppNavigation from './app/navigation/AppNavigator';

export default function App(){
  return(
    <>
    <AudioProvider>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </AudioProvider>
    </>
    )
}
