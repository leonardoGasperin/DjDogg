import React, { Component, createContext } from 'react';
import { Text, View, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { DataProvider } from 'recyclerlistview';
import { commonStyles } from '../../styles/CommonStyles';

export const AudioContext = createContext();

export class AudioProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          audioFiles: [],
          permissionError: false,
          dataProvider: new DataProvider((r1, r2) => r1 !== r2),
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
        const { dataProvider, audioFiles } = this.state
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        })
        
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount
        })
        this.setState({
            ...this.state,
            dataProvider: dataProvider.cloneWithRows([
              ...audioFiles,
              ...media.assets,
            ]),
            audioFiles: [...audioFiles, ...media.assets],
          })
    }

    getPermission = async () => {
        const permission =  await MediaLibrary.getPermissionsAsync()

        if(permission.granted){
            this.getAudioFiles()
        }
        
        if(!permission.canAskAgain && !permission.granted){
            this.setState({ ...this.state, permissionError: true });
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
        const {audioFiles, dataProvider, permissionError} = this.state
        if(permissionError) return <View style={commonStyles.container}>
            <Text style={{fontSize: 20, color: 'red'}}>Permissions denied, please go to app configuration and give permission</Text>
        </View>


        return (
            <AudioContext.Provider value={{audioFiles: audioFiles, dataProvider}}>
                {this.props.children}
            </AudioContext.Provider>
        );        
    }
}

export default AudioProvider