import { StyleSheet } from 'react-native';

import { Pressable, View, Text } from 'react-native';

export default function FirstWeek() {
  const saveButton = () => {
    alert("Saving this page! ");
  }
  return (
    <View style = {styles.screen}>
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>Our Cat App</Text>
      </View>
      <View>
        <Text>First Week Page</Text>
      </View>
      <View style = {styles.saveButton}>
        <Pressable onPress ={saveButton}>
          <Text style = {styles.saveText}>Save</Text>
        </Pressable>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 50,
    fontWeight: 'bold',
  },

  titleContainer:{
    alignItems: 'center',
    backgroundColor: 'rgb(234, 235, 230)',
    padding: 20,
    paddingTop: 30,
  },

  screen: {
    backgroundColor: 'white',
    flex: 1,
  },

  navBar:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(139, 223, 232)',
    paddingTop: 20, 
    paddingBottom: 20,
  },

  saveButton: {
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    position: 'absolute',
    paddingTop: 140,
    paddingRight: 40,
  },

  saveText: {
    color: 'gold'
  }
});
