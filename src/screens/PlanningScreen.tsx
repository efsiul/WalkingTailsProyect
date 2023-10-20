import React,{
    useEffect,
    useState 
    }                           from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
    }                           from 'react-native'
import { PlanningStyles }       from '../style/PlanningStyle'
import MenuButtons              from '../components/buttonMenu/MenuButtons'
import LabelContainers          from '../components/labelContainer/LabelContainers'
import { LabelContainerStyle }  from '../style/LabelContainerStyle'
import { DrawerScreenProps }    from '@react-navigation/drawer';
import { ModalInfo }            from '../components/ModalInfo';
import { IconOptionsApp }       from '../style/IconOptionsApp';

interface Props extends DrawerScreenProps<any, any>{}

export const PlanningScreen = ({navigation}: Props) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        navigation.setOptions({

        })
    }, [])

    return (
        <View style={PlanningStyles.container}>
            <View style={PlanningStyles.topContainer}>
                {/* TODO logica del google maps*/}
                <Text>Espacio para Maps</Text>
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
                    onPress={() => { navigation.navigate('RideScreen') }}
                >
                    <Text style={LabelContainerStyle.buttonText}>Find Walker</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})