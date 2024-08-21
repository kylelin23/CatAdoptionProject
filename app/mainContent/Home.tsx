import { Alert, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

import { ImageBackground, Image, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native'; // Import the hook

import _layout from '../navBar/_layout';

import { Phase } from '../../constants/content'
import React from 'react';

export interface MainContentProps {
  phase: Phase | undefined;
}

const MainContent: React.FC<MainContentProps> = ({ phase }) => {

  const navigation = useNavigation(); 

  const prepFoodButton = () => {
    alert("fodisjfnosdl");
  }

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

  if(phase === Phase.prep) {
    return(
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        <TouchableOpacity style = {styles.button} onPress = {prepFoodButton}>
          <Image source={require('../../assets/images/bowl3.png')} style = {styles.image}/>
        </TouchableOpacity>
        <Image source={require('../../assets/images/toy3.png')} style = {styles.prepToyImage}/>
      </ImageBackground>
    )
  }

  if(phase === Phase.adoptionDay) {
    return(
      <View>
        <Text></Text>
      </View>
    )
  }

  if(phase === Phase.week1) {
    return(
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
       <Image source={require('../../assets/images/bowl3.png')} style = {styles.image}/>
        <Image source={require('../../assets/images/toy3.png')} style = {styles.prepToyImage}/>
      </ImageBackground>
    )
  }

  if(phase === Phase.month1) {
    return(
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        <Image source={require('../../assets/images/bowl3.png')} style = {styles.image}/>
        <Image source={require('../../assets/images/toy3.png')} style = {styles.prepToyImage}/>
      </ImageBackground>
    )
  }
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
