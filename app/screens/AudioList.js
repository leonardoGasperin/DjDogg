import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { audioContext } from '../context/AudioProvider';

export class AudioList extends Component{
    static contextType = audioContext
    render(){
        return(
            <ScrollView>
                    {this.context.audioFiles.map(item => 
                        <Text key={item.id}>{item.filename}</Text>
                    )}
                </ScrollView>
        )
    }
}

export default AudioList;