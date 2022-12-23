import { Dimensions, StyleSheet } from "react-native";

const { width} = Dimensions.get('window')

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export const audioItemStyle = StyleSheet.create({
    container:{
        height: width * 0.15,
        flexDirection: 'row',
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    leftContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    thumb:{
        flexBasis: '13%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'indigo',
        borderRadius: 25
    },
    titleContainer:{
        width: '86%',
        paddingLeft: '3%'
    },
    title:{
        fontSize: 16,
    },
    timerText:{
        fontSize: 12,
    },
    rightContainer:{
        height: '100%',
        flexBasis: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        width: width * 0.8,
        borderBottomWidth: 1,
        borderRadius: 1,
        borderBottomColor: 'indigo',
        opacity: 0.3,
        alignSelf: 'center',
    }
})