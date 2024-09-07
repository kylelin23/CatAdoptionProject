import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState, useContext } from 'react';
import 'react-native-reanimated';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { PhaseProvider } from '@/context/PhaseProvider';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import MainContent from './mainContent/Help';
import NavBar from './navBar/_layout';
import { Phase } from '../constants/content'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function Root() {
  const { phase, setPhase } = useContext<PhaseContextType>(PhaseContext);

  return (
    <>
      <SafeAreaView style = {styles.topSafeArea}></SafeAreaView>
      <SafeAreaView style = {styles.bottomSafeArea}>
        <View style = {styles.screen}>
          <View style = {styles.mainContent}>
            <MainContent phase={phase}/>
          </View>
          <View style = {styles.navBar}>
            <NavBar onTapHandler={(selectedPhase: Phase) => setPhase(selectedPhase)} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PhaseProvider>
        <Root/>
      </PhaseProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'rgb(188, 196, 199)'
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'purple'
  },
  screen: {
    flex: 1,
  }, 

  mainContent: {
    flex: 1,
  },

  navBar: {
    justifyContent: 'flex-end',
    width: '100%', 
    bottom: 0,
  }

});