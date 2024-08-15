import { Tabs } from 'expo-router';
import React from 'react';


import { useColorScheme } from '@/hooks/useColorScheme';
import { View, StyleSheet } from 'react-native';

interface NavBarProps {
  onTapHandler: (selectedPhase: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onTapHandler }) => {

// export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style = {styles.bar}>
      
    </View>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: 'black', // Color for active icons
    //     tabBarInactiveTintColor: 'gray', // Color for inactive icons
    //     tabBarStyle: {
    //       backgroundColor: 'rgb(139, 223, 232)', // Red background color for the tab bar
    //       borderTopWidth: 0, // Remove border line at the top of the tab bar
    //       paddingTop: 10,
    //       paddingBottom: 10,
    //       height: 60,
    //     },
    //     headerShown: false,
    //   }}>
    //   <Tabs.Screen
    //     name="mainContent/Preparation"
    //     options={{
    //       title: 'P',
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="mainContent/AdoptionDay"
    //     options={{
    //       title: 'A',
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="mainContent/FirstWeek"
    //     options={{
    //       title: 'W',
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="mainContent/FirstMonth"
    //     options={{
    //       title: 'M',
    //     }}
    //   />
    // </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'rgb(139, 223, 232)',
    height: 60,
  },
})

export default NavBar;