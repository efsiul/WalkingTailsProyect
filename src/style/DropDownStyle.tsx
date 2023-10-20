import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDown from '../components/dropDonwComponent/DropDown';

export const DropDownStyle = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        color: '#000',
    },
    label: {
        position: 'absolute',
        backgroundColor: '#000',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color:'#fff'
    },
    selectedTextStyle: {
        fontSize: 12,
        color:'#fff'
    },
    inputSearchStyle: {
        height: 20,
        fontSize: 16,
    },
    textStyle:{
        color: 'white',
        padding: 10,
        marginLeft: 8
    },
    buttonModifier:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0A9396',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 40,
        width: 170,
        height: 40,
        fontSize: 16,
        top: 40,
        fontFamily: 'Nunito'
    },
})