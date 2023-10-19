import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateTimePickerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#000',
        color:"#fff"
    },
    dateTimeText: {
        marginLeft: 20,
        color: "#fff"
    },
})