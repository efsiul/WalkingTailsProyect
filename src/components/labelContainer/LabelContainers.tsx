import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { LabelContainerStyle } from '../../style/LabelContainerStyle';
import { IconOptionsApp } from '../../style/IconOptionsApp';

interface LabelButtonContainerProps {
    labels: string[];
    buttons: string[];
}

const LabelContainers: React.FC<LabelButtonContainerProps> = ({ labels, buttons }) => {
    return (
        <View style={LabelContainerStyle.container}>
            {labels.map((label, index) => (
                <View key={index} style={LabelContainerStyle.labelButton}>
                    <Text style={LabelContainerStyle.labelText}>{label}</Text>
                    <TouchableOpacity style={LabelContainerStyle.button}>
                        {IconOptionsApp(buttons[index])}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

export default  LabelContainers 

