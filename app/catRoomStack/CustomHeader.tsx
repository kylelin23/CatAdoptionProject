import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';


export const CustomHeader = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Home</Text>
      <Text style = {styles.subtitle}>{phase}</Text>
    </View>
  );
}

const styles = StyleSheet.create( {
  title: {
    fontSize: 17, 
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 12,
  },

  container: {
    alignItems: 'center'
  },
});