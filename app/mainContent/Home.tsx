import { StyleSheet } from 'react-native';

import { Image, View, Text } from 'react-native';

import _layout from '../navBar/_layout';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { Phase } from '../../constants/content'
import { CatRoomStack } from '../catRoomStack/CatRoomStack';

import React, { useContext } from 'react';

export interface MainContentProps {
  phase: Phase | undefined;
}

const MainContent: React.FC<MainContentProps> = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);

  if (!phase) { // Starting home page
    return(
      <View>
        <View style = {styles.title}>
          <Text style = {styles.titleText}>Cat Adoption Project</Text>
        </View>
        <Image source={require('../../assets/images/betterMaggy.png')} style = {styles.homePageImage}/>
      </View>
    )
  }

  return (<CatRoomStack/>);
}

export default MainContent;

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator screenOptions={{
//         headerStyle: { backgroundColor: 'rgb(193, 199, 195)'},
//       }
//         }>
//         <Stack.Screen name="Cat Adoption App" component={Home} />
//         <Stack.Screen name="Cat Adoption App: Preparation" component={CatRoom} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export MyStack;

const styles = StyleSheet.create({
  homePageImage: {
    height: 625, 
    width: 400,
  },

  title: {
    backgroundColor: 'rgb(187, 198, 201)', 
    height: 80,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 10,
  },

  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  catRoom: {
    flex: 1,
  },

  placeholderText: {
    fontSize: 50,
  },

  prepToyImage: {
    resizeMode: 'contain', 
    height: 100,
    width: 100,
    bottom: 100, 
    right: 50,
    position: 'absolute',
  }, 

  button: {
    bottom: 70, 
    left: 30, 
    width: 100, 
    position: 'absolute',
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 1,
  }, 

  image: {
    resizeMode: 'contain', 
    width: 100,
  },
});
