import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';

type Props = {
  title: string,
};

export const CustomHeader: React.FC<Props> = ({title}) => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>{title}</Text>
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