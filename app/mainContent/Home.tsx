import { StyleSheet } from 'react-native';

import { Image, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native'; // Import the hook

interface MainContentProps {
  phase: string;
}

export const MainContent: React.FC<MainContentProps> = ({ phase }) => {

  const navigation = useNavigation(); 

  return(
    <View>

    </View>
  )
}

export function Home() {
  return (
    <View>
      <Image source={require('../../assets/images/maggy.png')} style = {styles.image}/>
    </View>
  )
}

export function Preparation() {
  return (
    <View>
      <Text>Preparation Page</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'rgb(193, 199, 195)'},
      }
        }>
        <Stack.Screen name="Cat Adoption App" component={Home} />
        <Stack.Screen name="Cat Adoption App: Preparation" component={Preparation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

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
