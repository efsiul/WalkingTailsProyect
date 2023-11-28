import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";


export const PlanningStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 3,
        backgroundColor: 'white',
    },
    middleContainer: {
        flex: 1,
        backgroundColor: '#001219'
    },
    bottomContainer: {
        flex: 3,
        backgroundColor: '#001219',
    },
    hideShow:{
        backgroundColor: '#001219',
    },
    toggleButton: {
        backgroundColor: ColorsStyle.trackColorSwitch2,
        padding: 6,
        marginTop: 10,
        borderRadius: 10,
        alignSelf: 'center',
        bottom: 5
    },
    toggleButtonText: {
        color: ColorsStyle.primary,
        fontSize: 12
    },
    
})