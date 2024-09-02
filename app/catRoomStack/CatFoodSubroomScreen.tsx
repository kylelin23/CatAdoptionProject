import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { content, Subroom } from '@/constants/content';
import {LinearGradient} from 'expo-linear-gradient';

type MessageViewProp = {
  message: string,
};

const MessageView: React.FC<MessageViewProp> = ({message}) => {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeInLeft.springify()}
      exiting={FadeOutRight.springify()}
    >
      <View style = {styles.textContainer}>
        <Text>{message}</Text>
      </View>
    </Animated.View>
  );
}

export const CatFoodSubroomScreen: React.FC = () => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const subroomContent = phase ? content[phase][Subroom.food] : { thought: '', messages: [] };
  const [messageIndex, setMessageIndex] = useState<number>(0);
  // isVisible is set to false and you can use setIsVisible to change the value of isVisible
  const showMessage = (index: number) => {
    setMessageIndex(index);
  }

  // const halfScreenWidth = Dimensions.get('window').width/2;

  return (
    <LinearGradient colors={['#rgb(173, 217, 160)', '#3b5998', '#192f6a']} style = {styles.screen}>
      {messageIndex == -1 && 
      (<MessageView message={`Thought: ${subroomContent?.thought}`}/>)}

      {(messageIndex == 0 || messageIndex == 1 || messageIndex == 2 || messageIndex == 3) &&
      (<MessageView key={messageIndex} message={`${messageIndex+1}. ${subroomContent?.messages[messageIndex]}`}/>)}

      <View style = {{flex: 1, justifyContent: 'center'}}>
        <View style = {{gap: 80,}}>
          <View style = {{alignItems: 'center'}}>
            <TouchableOpacity onPress = {() => showMessage(0)}>
              <Image source = {(require('../../assets/images/bowl1.png'))}style = {styles.placeholder}></Image>
            </TouchableOpacity>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress = {() => showMessage(1)}>
              <Image source = {(require('../../assets/images/bowl3.png'))}style = {styles.placeholder}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => showMessage(2)}>
              <Image source = {(require('../../assets/images/bowl5.png'))}style = {styles.placeholder}></Image>
            </TouchableOpacity>
          </View>
          <View style = {{alignItems: 'center'}}>
            <TouchableOpacity onPress = {() => showMessage(3)}>
              <Image source = {(require('../../assets/images/bowl4.png'))}style = {styles.placeholder}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      {/* {subroomContent?.messages.map((message, index) => <Text key={index}>Message: {message}</Text>)} */}

      <TouchableOpacity style = {styles.button} onPress = {() => showMessage(-1)}>
        <Image source = {require('../../assets/images/cat.webp')} style = {styles.cat}></Image>
      </TouchableOpacity>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create( {
  cat: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
  },

  screen: {
    flex: 1,
  },

  button: {
    position: 'absolute', 
    bottom: 30, 
  }, 

  phase: {
    fontSize: 50, 
  }, 

  placeholder: {
    height: 60, 
    width: 60,
    resizeMode: 'contain',
  },

  textContainer: {
    backgroundColor: 'purple', 
    padding: 20, 
    fontSize: 10, 
    borderRadius: 15,
    height: 160,
    width: 200,
    justifyContent: 'center',
  }, 

  container: {
    position: 'absolute', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }, 

})