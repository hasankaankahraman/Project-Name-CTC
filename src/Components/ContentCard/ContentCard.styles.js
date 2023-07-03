import { StyleSheet, Dimensions } from "react-native";

const COLOR = {orange:'#F97B22',cream:'#FEE8B0',greenlight:'#9CA777',greendark:'#7C9070'};

export default StyleSheet.create({
    container:{
        flex:1,
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width / 1.2,
        backgroundColor:COLOR.cream,
        margin:10,
        padding:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        borderRadius:10,
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 1.7,
        margin:5,
        resizeMode:'contain',
        borderWidth:2,
        borderColor:COLOR.greenlight
    },
    title:{
        color:'black',
        fontWeight:'bold'
    },
    category:{
    },
    finished:{
        color:'red',
        fontWeight:'bold'
    },
    completed:{
        color:'green',
        fontWeight:'bold'
    },

});