import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatRoomStackParamList } from './params'
import { CatRoomScreen } from "./CatRoomScreen"
import { CatFoodSubroomScreen } from "./CatFoodSubroomScreen"

const Stack = createNativeStackNavigator<CatRoomStackParamList>();

export const CatRoomStack: React.FC = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName='CatRoom'>
        <Stack.Screen name='CatRoom' component={CatRoomScreen}/>
        <Stack.Screen name='CatFoodSubroom' component={CatFoodSubroomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
