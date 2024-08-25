import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { content, Subroom } from '@/constants/content';

export const CatFoodSubroomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const subroomContent = phase ? content[phase][Subroom.food] : { thought: '', messages: [] };

  return (
    <View style = {styles.screen}>
      <TouchableOpacity style = {styles.button} onPress = {() => alert('Food thought')}>
        <Image source = {require('../../assets/images/cat.webp')} style = {styles.cat}></Image>
      </TouchableOpacity>
      <Text>Cat food subroom screen with phase: {phase}</Text>
      <Text>Thought: {subroomContent?.thought}</Text>

      {subroomContent?.messages.map((message, index) => <Text key={index}>Message: {message}</Text>)}
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
  },

  button: {
    position: 'absolute', 
    bottom: 70, 
  }
})