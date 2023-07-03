import { StyleSheet, Dimensions } from "react-native";

const COLOR = {orange:'#F97B22',cream:'#FEE8B0',greenlight:'#9CA777',greendark:'#7C9070'};

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    image:{
        borderRadius:50,
        height: Dimensions.get('window').height / 10,
        width: Dimensions.get('window').width / 5,
        margin:5,
        resizeMode:'contain',
        borderWidth:2,
        borderColor:COLOR.greenlight
    },
    title:{
        color:'black',
        fontWeight:'bold'
    },

});