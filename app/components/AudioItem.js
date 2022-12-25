import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { audioItemStyle } from '../../styles/CommonStyles';
import convertTime from '../misc/timeConverter';

const AudioItem = ({title, duration, onPressOption, onAudioPress}) => {
    
    return(
        <>
           <View style={audioItemStyle.container}>
                <TouchableWithoutFeedback onPress={(onAudioPress)}>
                    <View style={audioItemStyle.leftContainer}>
                        <View style={audioItemStyle.thumb}>
                            <Text style={audioItemStyle.p}> </Text>
                        </View>
                        <View style={audioItemStyle.titleContainer}>
                            <Text numberOfLines={1} style={audioItemStyle.title}>
                                {title}
                            </Text>
                            <Text style={audioItemStyle.timerText}>
                                {convertTime(duration)}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={audioItemStyle.rightContainer}>
                    <Entypo onPress={onPressOption} name="dots-three-vertical" size={20} color="black" style={{padding: 10}}/>
                </View>
            </View>
                <View style={audioItemStyle.separator}/>
        </>
    )
}

export default AudioItem