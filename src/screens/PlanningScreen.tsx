import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { PlanningStyles } from '../style/PlanningStyle'
import MenuButtons from '../components/buttonMenu/MenuButtons'
import LabelContainers from '../components/labelContainer/LabelContainers'
import { IconOptionsApp } from '../style/IconOptionsApp';
import { LabelContainerStyle } from '../style/LabelContainerStyle'

export default function PlanningScreen() {
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
                    onPress={() => {/*TODO*/ }}
                >
                    <Text style={LabelContainerStyle.buttonText}>Find Walker</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})