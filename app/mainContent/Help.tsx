import { StyleSheet, TouchableOpacity } from 'react-native';

import { Image, View, Text } from 'react-native';

import _layout from '../navBar/_layout';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { Phase } from '../../constants/content'
import { CatRoomStack } from '../catRoomStack/CatRoomStack';

import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export interface MainContentProps {
  phase: Phase | undefined;
}

const MainContent: React.FC<MainContentProps> = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const [isVisible, setIsVisible] = React.useState(false);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  }

  if (!phase) { // Starting home page
    return(
      <View>
        <View style = {styles.title}>
          <Text style = {styles.titleText}>Welcome to Catwise! </Text>
        </View>
        <LinearGradient colors = {['rgb(217, 147, 210)', 'white']}style = {styles.homePageImage}>
          <TouchableOpacity style = {styles.catImageContainer} onPress = {changeVisibility}>
            <Image style = {styles.catImage} source = {require('../../assets/images/cat.webp')}></Image>
          </TouchableOpacity>
          <View style = {styles.container}>
            {(isVisible == false) && 
            (<View>
              <Text style = {{fontSize: 25, color: 'purple',}}>Our app organizes bite-sized tips for you in 4 phases, tap the cat to learn about them! </Text>
            </View>)}
            {(isVisible == true) && 
            (<View style = {{gap: 15}}>
              <View>
                <View>
                  <Text style = {styles.text}>P - Preparation</Text>
                </View>
                <View>
                  <Text style = {styles.text}>A - Adoption Day</Text>
                </View>
                <View>
                  <Text style = {styles.text}>W - Week One</Text>
                </View>
                <View>
                  <Text style = {styles.text}>S - Settling In! </Text>
                </View>
              </View>
              <View>
                <Text style = {styles.text}>Click on your current phase below to get started! </Text>
              </View>
            </View>
            )}
          </View>
        </LinearGradient>
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
    width: '100%',
    height: '100%',
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

  text: {
    fontSize: 22,
    color: 'purple',
  }, 

  container: {
    padding: 20,
    gap: 10,
  },

  catImage: {
    // position: 'absolute', 
    height: 300,
    resizeMode: 'contain',
  }, 

  catImageContainer: {
    alignItems: 'center',
  },
});
