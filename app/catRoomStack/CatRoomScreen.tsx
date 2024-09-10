import React, { useContext } from 'react';
import { Dimensions, Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, ImageStyle, ImageRequireSource } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { CatRoomStackParamList } from "./params"
import { Subroom } from '@/constants/content';

// const screenHeight: number = Dimensions.get('window').height;

export const CatRoomScreen: React.FC = () => {

  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const navigation = useNavigation<NavigationProp<CatRoomStackParamList>>();

  const buttonData: [Subroom, StyleProp<ViewStyle>, StyleProp<ImageStyle>, ImageRequireSource][] = [
    [Subroom.food, styles.foodButton, styles.foodImage, require('../../assets/images/bowl3.png')],
    [Subroom.litter, styles.litterButton, styles.litterImage, require('../../assets/images/litter1.png')],
    [Subroom.toys, styles.toyButton, styles.toyImage, require('../../assets/images/toy3.png')],
    [Subroom.scratchingItems, styles.scratchingButton, styles.scratchingImage, require('../../assets/images/scratching1.png')],
    [Subroom.bedding, styles.bedButton, styles.bedImage, require('../../assets/images/bed1.png')],
    [Subroom.vet, styles.vetButton, styles.vetImage, require('../../assets/images/vet1.png')],
  ];

  return (
    <View>
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        {
          buttonData.map((data) => (
            <TouchableOpacity key={data[0]} style = {data[1]} onPress = {() => {
              navigation.navigate('Subroom', {subroom: data[0]});
            }}>
              <Image source={data[3]} style = {data[2]}/>
            </TouchableOpacity>
          ))
        }

      </ImageBackground>
      <View style = {styles.instructionsContainer}>
        <Text style = {styles.instructions}>Click on a cat item to get started! </Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  catRoom: {
    height: '100%'
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

  toyButton: {
    bottom: 70,
    right: 30,
    width: 100,
    position: 'absolute',
  },
  toyImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },

  litterButton: {
    bottom: 150,
    left: 150,
    width: 100,
    position: 'absolute',
  },
  litterImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },

  scratchingButton: {
    bottom: 170,
    right: 50,
    width: 100,
    position: 'absolute',
  },
  scratchingImage: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },

  bedButton: {
    bottom: 10,
    left: 120,
    width: 150,
    position: 'absolute',
  },
  bedImage: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
  },

  vetButton: {
    top: 50,
    left: 20,
    width: 150,
    position: 'absolute',
  },
  vetImage: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
  },

  instructions: {
    fontSize: 15,
    textAlign: 'center',
  },

  instructionsContainer: {
    backgroundColor: 'rgb(217, 147, 210)',
    width: 150,
    height: 150,
    paddingVertical: 10,
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    marginTop: 10,
    right: 10,
  },

});