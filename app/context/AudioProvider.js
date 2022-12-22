import React, { Component, createContext } from 'react';
import { Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const audioContext = createContext();

export class AudioProvider extends Component() {
    constructor(props) {
        super(props);
        this.state = {
          audioFiles: []
        };
      }

    permissionAlert = () => {
        Alert.alert("Permission required", "Permission needed to access files", [{
            text: 'Allow',
            onPress: () => this.getPermission()
        },
        {
            text: 'Deny',
            onPress: () => this.permissionAlert()
        }])
    }

    getAudioFiles = async () => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        })
        
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount
        })
        console.log(media)
        this.totalCount = media.totalCount
        this.setState({...this.state, audioFiles: media.assets})
    }

    getPermission = async () => {
        const permission =  await MediaLibrary.getPermissionsAsync()

        if(permission.granted){
            this.getAudioFiles()
        }
        if(!permission.granted && permission.canAskAgain){
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
            if(status === 'denied' && canAskAgain){
                 this.permissionAlert()
            }
            if(status === 'granted'){
                this.getAudioFiles()
            }
            if(status === 'denied' && !canAskAgain){
                this.setState({ ...this.state, permissionError: true });
            }
        }
    }

    componentDidMount(){
        this.getPermission()
    }

    render(){
        return (
            <audioContext.Provider value={{audioFiles: this.audioFiles}}>
                {this.props.children}
            </audioContext.Provider>
        );        
    }
}

export default AudioProvider