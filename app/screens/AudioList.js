import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { AudioContext } from '../context/AudioProvider';
import { RecyclerListView, LayoutProvider } from 'recyclerlistview'
import AudioItem from '../components/AudioItem';
import OptionModal from '../components/OptionModal';
import { Audio } from 'expo-av'

export class AudioList extends Component{
    static contextType = AudioContext

    constructor(props){
        super(props)
        this.state = {
            opstionModalVisible: false,
            playbackObj: null,
            soundObj: null,
            currentAudio: {}
        }
        this.currentItem = {}
    }
    
    layoutProvider = new LayoutProvider(i => 'audio', (type, dim) => {
        switch(type){
            case 'audio':
                dim.width = Dimensions.get('window').width
                dim.height = 70
                break
            default:
                dim.width = 0
                dim.height = 0
        }
    })

    handleAudioPress = async (audio) => {
        //console.log(audio)
        //play audio for the first time
        if(this.state.soundObj === null || !this.state.soundObj.isPlaying){
            const playbackObj = new Audio.Sound()
            const status = await playbackObj.loadAsync({uri: audio.uri}, { shouldPlay: true })
            return this.setState({
                ...this.state, 
                playbackObj: playbackObj, 
                soundObj: status, 
                currentAudio: audio
            })    
        }
        if(this.state.soundObj.isLoaded && this.state.soundObj.isPlaying){
            const status = this.state.playbackObj.setStatusAsync({shouldPlay: false})
            return this.setState({...this.state, soundObj: status})
        }
        if(this.state.soundObj.isLoaded && !this.state.soundObj.isPlaying){
            const status = this.state.playbackObj.setStatusAsync({shouldPlay: true})
            return this.setState({...this.state, soundObj: status})
        }
    }

    rowRenderer = (type, item) => {
        return <AudioItem title={item.filename} duration={item.duration} 
            onPressOption={() => {
                this.currentItem = item
                this.setState({...this.state, opstionModalVisible: true})
            }}
            onAudioPress={() => {this.handleAudioPress(item)}}
        />
    }
    render(){
        return(
            <AudioContext.Consumer>
                {({ dataProvider }) => {
                        return (
                            <View style={{flex: 1}}>
                                <RecyclerListView
                                    dataProvider={dataProvider}
                                    layoutProvider={this.layoutProvider}
                                    rowRenderer={this.rowRenderer}
                                />
                                <OptionModal
                                            onOpt1={() => console.log("OPT 1")}
                                            onOpt2={() => console.log("OPT 2")}
                                            currentItem={this.currentItem} 
                                            onClose={() => {
                                            this.setState({...this.state, opstionModalVisible: false})
                                            }} 
                                            visible={this.state.opstionModalVisible}/>
                            </View>
                        )
                    }}
            </AudioContext.Consumer>
        )
    }
}

export default AudioList;