import React, { useContext } from 'react';
import { View, Text } from 'react-native'

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { content, Subroom } from '@/constants/content';

export const CatToySubroomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const subroomContent = phase ? content[phase][Subroom.toys] : { thought: '', messages: [] };

  return (
    <View>
      <Text>Cat toy subroom screen with phase: {phase}</Text>
      <Text>Thought: {subroomContent?.thought}</Text>

      {subroomContent?.messages.map((message, index) => <Text key={index}>Message: {message}</Text>)}
    </View>
  );
}