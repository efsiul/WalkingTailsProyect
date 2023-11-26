import { StyleSheet } from "react-native";
import { ColorsStyle } from "./ColorsStyle";
import { box_height } from "./DimensionStyle";


export const DogWalkerStyle = StyleSheet.create({
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

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Nunito',
        color: '#fff'
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileInfo: {
        marginLeft: 10,
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileRating: {
        fontSize: 14,
    },
})