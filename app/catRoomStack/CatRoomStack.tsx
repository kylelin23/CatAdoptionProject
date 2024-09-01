import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatRoomStackParamList } from './params'
import { CatRoomScreen } from "./CatRoomScreen"
import { CatFoodSubroomScreen } from "./CatFoodSubroomScreen"
import { CatToySubroomScreen } from "./CatToySubroomScreen"

import { CustomHeader } from "./CustomHeader";
import { CustomHeader2 } from "./CustomHeader2";
import { View } from 'react-native';

const Stack = createNativeStackNavigator<CatRoomStackParamList>();

export const CatRoomStack: React.FC = () => {

  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: { 
          backgroundColor: 'rgb(187, 198, 201)', 
        },
        headerTintColor: 'black'
      }}>
        <Stack.Screen 
        name='Home' 
        component={CatRoomScreen}
        options={{
          headerTitle: () => <CustomHeader />, // use the custom header
        }}></Stack.Screen>
        
        <Stack.Screen 
        name='Food' 
        component={CatFoodSubroomScreen} 
        options={{
          headerTitle: () => <CustomHeader2 />, // use the custom header
        }}></Stack.Screen>
        
        <Stack.Screen name = 'Toys' component = {CatToySubroomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
