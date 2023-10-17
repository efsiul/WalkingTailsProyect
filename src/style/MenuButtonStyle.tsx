import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";

export const MenuButtonStyles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textButton: {
        top: 20,
        textAlign: "center",
        color: "white",
    },
    iconTextContainer: {
        alignItems: "center",
    },
    buttonImage: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 2,
        padding: 30,
        top: 20,
    },
})