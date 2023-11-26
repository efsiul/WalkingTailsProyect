import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";

export const RideStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 2,
        backgroundColor: 'white',
    },
    middleContainer: {
        flex: 3,
        backgroundColor: '#000'
    },
    bottomContainer: {
        flex: 3,
        backgroundColor: '#000',
        
    },
    icon: {
        bottom: 100,
    }
})