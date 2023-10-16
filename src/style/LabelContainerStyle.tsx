import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";

export const LabelContainerStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    labelButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    labelText: {
        marginRight: 10,
        color: "#0BA6C7",
        fontFamily: 'Nunito',
        fontSize: 18
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: "#0A9396",
        borderRadius: 20,
        width: 60,
        alignItems:'center'
    },
    buttonIcon: {
        width: 24,
        height: 24,
    },
    bottomButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a9396',
        margin: 20, 
        borderRadius: 40,
    },
    buttonText: {
        fontSize: 20,
        color: '#E9D8A6',
    },

})