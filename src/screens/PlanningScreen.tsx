import React, {
    useEffect,
    useState
} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { PlanningStyles } from '../style/PlanningStyle'
import MenuButtons from '../components/buttonMenu/MenuButtons'
import LabelContainers from '../components/labelContainer/LabelContainers'
import { LabelContainerStyle } from '../style/LabelContainerStyle'
import { DrawerScreenProps } from '@react-navigation/drawer';
import MapComponent from '../components/mapComponent/MapComponent';
import { useAppState } from '../context/AppStateContext'

interface Props extends DrawerScreenProps<any, any> { }

export const PlanningScreen = ({ navigation }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const { setRoute, selectedRoute } = useAppState(); // Accede al estado global

    useEffect(() => {
        navigation.setOptions({

        })
    }, [])

    const handleTraceRoute = (route: any) => {
        setRoute(route); // Almacena la selección de ruta en el estado global
    };

    return (
        <View style={PlanningStyles.container}>
            <View style={PlanningStyles.topContainer}>
                <MapComponent route={[selectedRoute]} />
            </View>
            <View style={PlanningStyles.middleContainer}>
                <MenuButtons />
            </View>
            <View style={PlanningStyles.bottomContainer}>
                <LabelContainers
                    labels={['Pick Up Point', 'Ride Time', 'Offer Rate', 'Options and comments']}
                    buttons={['BUSQUEDA', 'timer', 'perro', 'cool']}
                />
                <TouchableOpacity
                    style={LabelContainerStyle.bottomButton}
                    onPress={() => {
                        handleTraceRoute(selectedRoute);
                        navigation.navigate('RideScreen');
                    }}
                >
                    <Text style={LabelContainerStyle.buttonText}>Find Walker</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})