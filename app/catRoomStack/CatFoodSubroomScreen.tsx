import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { content, Subroom } from '@/constants/content';

export const CatFoodSubroomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const subroomContent = phase ? content[phase][Subroom.food] : { thought: '', messages: [] };
  const [isVisible, setIsVisible] = useState(false);
  // isVisible is set to false and you can use setIsVisible to change the value of isVisible
  const setVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <View style = {styles.screen}>
      <TouchableOpacity style = {styles.button} onPress = {setVisibility}>
        <Image source = {require('../../assets/images/cat.webp')} style = {styles.cat}></Image>
      </TouchableOpacity>
      <View style = {{alignItems: 'center', paddingVertical: 20,}}>
        <Text style = {styles.phase}>{phase}: </Text>
      </View>
      {subroomContent?.messages.map((message, index) => <Text key={index}>Message: {message}</Text>)}
      {isVisible && 
      (<Text>{subroomContent?.thought}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create( {
  cat: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
  },

  screen: {
    flex: 1,
    paddingHorizontal: 20
  },

  button: {
    position: 'absolute', 
    bottom: 70, 
  }, 

  phase: {
    fontSize: 50, 
  }
})