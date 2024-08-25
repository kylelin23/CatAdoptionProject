import React, { useContext } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { CatRoomStackParamList } from "./params"

export const CatRoomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const navigation = useNavigation<NavigationProp<CatRoomStackParamList>>();

  return (
    <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        <TouchableOpacity style = {styles.foodButton} onPress = {() => {
          navigation.navigate('Food');
        }}>
          <Image source={require('../../assets/images/bowl3.png')} style = {styles.foodImage}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.toyButton} onPress = {() => {
          navigation.navigate('Toy');
        }}>
          <Image source={require('../../assets/images/toy3.png')} style = {styles.prepToyImage}/>
        </TouchableOpacity>
    </ImageBackground>
  );

  // Use Phases to change positions of items
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  prepToyImage: {
    resizeMode: 'contain', 
    width: 100, 
    height: 100,
  }, 

  foodButton: {
    bottom: 70, 
    left: 30, 
    width: 100, 
    position: 'absolute',
  }, 

  foodImage: {
    resizeMode: 'contain', 
    width: 100,
  },

  catRoom: {
    flex: 1,
  },

  toyButton: {
    bottom: 70, 
    right: 30, 
    width: 100, 
    position: 'absolute',
  }
});