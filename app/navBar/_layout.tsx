import React, { useState } from 'react';

import { Text, Pressable, View, StyleSheet } from 'react-native';

import { Phase } from "../../constants/content"

interface NavBarProps {
  onTapHandler: (selectedPhase: Phase) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onTapHandler }) => {
  const [selectedPhase, setSelectedPhase] = useState<Phase | undefined>();

  const data: [Phase, string][] = [
    [Phase.prep, 'P'],
    [Phase.adoptionDay, 'A'],
    [Phase.week1, 'W'],
    [Phase.month1, 'M'],
  ];

  return (
    <View style = {styles.bar}>

      {
        data.map((entry) => {
          const phase = entry[0];
          const text = entry[1];
          return (
            <Pressable key={text} onPress={() => { setSelectedPhase(phase); onTapHandler(phase); }}>
              <Text style = {[styles.icon , selectedPhase === phase ? styles.selectd : {}]}>{text}</Text>
            </Pressable>
        )})
      }

    </View>
    
    // OLD TAB BAR NAVIGATION: 
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
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },

  icon: {
    fontSize: 20,
    color: 'gray',
    padding: 20,
  },

  selectd: {
    color: 'white'
  },
})

export default NavBar;