import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DogWalkerStyle } from '../../style/AboutWalkerStyle';

const DogWalkerProfile = (props: { name: any; profileImage: any; rating: any; }) => {
    const { name, profileImage, rating } = props;

    return (
        <View style={DogWalkerStyle.container}>
            <Text style={DogWalkerStyle.title}>About the Dog Walker</Text>
            <View style={DogWalkerStyle.profileContainer}>
                <Image source={{ uri: profileImage }} style={DogWalkerStyle.profileImage} />
                <View style={DogWalkerStyle.profileInfo}>
                    <Text style={DogWalkerStyle.profileName}>{name}</Text>
                </View>
            </View>
        </View>
    );
};


export default DogWalkerProfile;