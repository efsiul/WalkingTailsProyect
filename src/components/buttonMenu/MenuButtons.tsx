import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MenuButtonStyles } from '../../style/MenuButtonStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconOptionsApp } from '../../style/IconOptionsApp';

const MenuButtons = () => {
  return (
    <View style={MenuButtonStyles.menuContainer}>
      <TouchableOpacity
        onPress={() => {/* TODO */ }}
      >
        <View style={MenuButtonStyles.iconTextContainer}>
          {IconOptionsApp('CAMINATA')}
          <Text style={MenuButtonStyles.textButton}>Caminata</Text>
        </View>

      </TouchableOpacity>

      <View style={MenuButtonStyles.iconTextContainer}>
        <TouchableOpacity
          onPress={() => {/* TODO */ }}
        >
          {IconOptionsApp('BANO')}
          <Text style={MenuButtonStyles.textButton}>Estilizado</Text>
        </TouchableOpacity>
      </View>

      <View style={MenuButtonStyles.iconTextContainer}>
        <TouchableOpacity
          onPress={() => {/* TODO */ }}
        >
          {IconOptionsApp('ENFERMERIA')}
          <Text style={MenuButtonStyles.textButton}>Enfermería</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default MenuButtons
