import { StyleSheet } from 'react-native';

import { Image, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import _layout from '../navBar/_layout';

export interface MainContentProps {
  phase: string;
}

const MainContent: React.FC<MainContentProps> = ({ phase }) => {
  if (!phase) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {<Text>Welcome to the Home Page</Text>}
      </View>
    )
  }

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {<Text>The stack navigator should go here with the cat room, food bowl room, toy room, etc. screens</Text>}
    </View>
  )
}

export default MainContent;

export function Home() {
  return (
    <View>
      <Image source={require('../../assets/images/maggy.png')} style = {styles.image}/>
    </View>
  )
}

export function CatRoom() {
  return (
    <View>
      <Text>Cat Room Page</Text>
    </View>
  );
}

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
    height: 500, 
    width: 400,
  }
});
