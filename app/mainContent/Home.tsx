import { StyleSheet } from 'react-native';

import { ImageBackground, Image, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native'; // Import the hook

import _layout from '../navBar/_layout';

import { Phase } from '../../constants/content'

export interface MainContentProps {
  phase: Phase | undefined;
}

const MainContent: React.FC<MainContentProps> = ({ phase }) => {

  const navigation = useNavigation(); 

  if (!phase) { // Starting home page
    return(
      <View>
        <View style = {styles.title}>
          <Text style = {styles.titleText}>Cat Adoption Project</Text>
        </View>
        <Image source={require('../../assets/images/maggy.png')} style = {styles.image}/>
      </View>
    )
  }

  if(phase === Phase.prep) {
    return(
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        <View style = {styles.screen}>
          <Text style = {styles.placeholderText}>Prep!!!!</Text>
        </View>
      </ImageBackground>
    )
  }

  if(phase === Phase.adoptionDay) {
    return(
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        <View style = {styles.screen}>
          <Text style = {styles.placeholderText}>Adoption!!!!</Text>
        </View>
      </ImageBackground>
    )
  }

  if(phase === Phase.week1) {
    return(
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        <View style = {styles.screen}>
          <Text style = {styles.placeholderText}>Week 1!!!!</Text>
        </View>
      </ImageBackground>
    )
  }

  if(phase === Phase.month1) {
    return(
      <ImageBackground source = {require('../../assets/images/room4.png')} resizeMode = 'cover' style = {styles.catRoom}>
        <View style = {styles.screen}>
          <Text style = {styles.placeholderText}>Month 1!!!!</Text>
        </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 625, 
    width: 400,
  },

  title: {
    backgroundColor: 'purple', 
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
    fontSize: 100,
  },
});
