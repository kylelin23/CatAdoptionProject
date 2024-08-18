import { StyleSheet } from 'react-native';

import { Image, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native'; // Import the hook

import _layout from '../navBar/_layout';

export interface MainContentProps {
  phase: string;
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

  return( // Cat room: 
    <View>
      <Image source={require('../../assets/images/room4.png')} style = {styles.image}/>
    </View>
  )
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
  }
});
