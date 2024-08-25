import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatRoomStackParamList } from './params'
import { CatRoomScreen } from "./CatRoomScreen"
import { CatFoodSubroomScreen } from "./CatFoodSubroomScreen"
import { CatToySubroomScreen } from "./CatToySubroomScreen"

const Stack = createNativeStackNavigator<CatRoomStackParamList>();

export const CatRoomStack: React.FC = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={CatRoomScreen}/>
        <Stack.Screen name='Food' component={CatFoodSubroomScreen} />
        <Stack.Screen name = 'Toy' component = {CatToySubroomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
