import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { AudioContext } from '../context/AudioProvider';
import { RecyclerListView, LayoutProvider } from 'recyclerlistview'
import { commonStyles } from '../../styles/CommonStyles';
import AudioItem from '../components/AudioItem';

export class AudioList extends Component{
    static contextType = AudioContext
    
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

    rowRenderer = (type, item) => {
        return <AudioItem title={item.filename} duration={item.duration}/>
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
                            </View>
                        )
                    }}
            </AudioContext.Consumer>
        )
    }
}

export default AudioList;