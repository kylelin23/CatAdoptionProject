import React, { useContext } from 'react';
import { View, Text } from 'react-native'

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';

export const CatFoodSubroomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);

  return (
    <View>
      <Text>Cat food subroom screen with phase: {phase}</Text>
    </View>
  );
}