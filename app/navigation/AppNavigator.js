import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayerList from '../screens/PlayerList';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='AudioList' component={AudioList}/>
            <Drawer.Screen name='Player' component={Player}/>
            <Drawer.Screen name='PlayerList' component={PlayerList}/>
        </Drawer.Navigator>
    )
}

export default AppNavigation