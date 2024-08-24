import React, { useContext } from 'react';
import { View, Text } from 'react-native'

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { content, Subroom } from '@/constants/content';

export const CatFoodSubroomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const subroomContent = phase ? content[phase][Subroom.food] : { thought: '', messages: [] };

  return (
    <View>
      <Text>Cat food subroom screen with phase: {phase}</Text>
      <Text>Thought: {subroomContent?.thought}</Text>

      {subroomContent?.messages.map((message, index) => <Text key={index}>Message: {message}</Text>)}
    </View>
  );
}