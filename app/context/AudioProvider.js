import React, { Component } from 'react';
import { View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { commonStyles } from '../../styles/CommonStyles';

export class AudioProvider extends Component() {
  
    constructor(props){
        super(props)
    }

    getPermission = async () => {
        const permission =  await MediaLibrary.getPermissionsAsync()

        if(permission.granted){
            ///TODO
             ///get all audio files
        }
        if(!permission.granted && permission.canAskAgain){
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
            if(status === 'denied' && canAskAgain){
                ///TODO
                 ///request permission
            }
            if(status === 'granted'){
                ///TODO
                 ///get all audio files
            }
            if(status === 'denied' && !canAskAgain){
                ///TODO
                 ///display a error
            }
        }

    }

    componentDidMount(){
        this.getPermission()
    }

    render(){
        return (
            <View style={commonStyles.container}>
        
            </View>
        );        
    }
}

export default AudioProvider