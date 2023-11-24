import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";
import CustomRatingBar from '../components/customRatingBar/CustomRatingBar';


export const CustomRatingBarStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        color:'white'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 80,
    },
    startImgStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    textQualification:{
        color:'#fff',
        bottom: 60
    },
    containerButtons:{
        bottom: 25
    },

    comButtons:{
        backgroundColor: '#0A9396',
        borderRadius: 40,
        padding: 10,
        alignSelf: 'center',
        width: 300,
        marginBottom: 10        

    },
    textButtons: {
        color: '#fff',
        textAlign:'center'
    }
})