import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { CatRoomStackParamList } from "./params"

export const CatRoomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const navigation = useNavigation<NavigationProp<CatRoomStackParamList>>();

  return (
    <View>
      <Text>Cat room screen with phase: {phase}</Text>
      <Button title={'Cat food'} onPress={() => {
        navigation.navigate('CatFoodSubroom');
      }}/>
    </View>
  );
}
