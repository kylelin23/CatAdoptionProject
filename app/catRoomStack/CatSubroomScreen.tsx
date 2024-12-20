import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageRequireSource, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { content, SubroomNames, Subroom } from '@/constants/content';
import { LinearGradient } from 'expo-linear-gradient';
import { CatRoomStackParamList } from './params'
import { CustomHeader } from "./CustomHeader";

import PaginationDot from 'react-native-animated-pagination-dot'



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
        <Text style = {{color: 'white'}}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const subroomImages: Record<Subroom, ImageRequireSource[]> = {
  [Subroom.food]: [
    require('../../assets/images/bowl1.png'),
    require('../../assets/images/bowl3.png'),
    require('../../assets/images/bowl5.png'),
    require('../../assets/images/bowl4.png'),
  ],
  [Subroom.toys]: [
    require('../../assets/images/toy1.png'),
    require('../../assets/images/toy2.png'),
    require('../../assets/images/toy3.png'),
    require('../../assets/images/toy4.png'),
    require('../../assets/images/toy5.png'),
  ],
  [Subroom.litter]: [
    require('../../assets/images/litter1.png'),
    require('../../assets/images/litter2.png'),
    require('../../assets/images/litter3.png'),
    require('../../assets/images/litter4.png'),
    require('../../assets/images/litter5.png'),
    require('../../assets/images/litter5.png'),
  ],
  [Subroom.scratchingItems]: [
    require('../../assets/images/scratching1.png'),
    require('../../assets/images/scratching2.png'),
    require('../../assets/images/scratching3.png'),
    require('../../assets/images/scratching4.png'),
    require('../../assets/images/scratching5.png'),
    require('../../assets/images/scratching6.png'),
  ],
  [Subroom.bedding]: [
    require('../../assets/images/bed1.png'),
    require('../../assets/images/bed2.png'),
    require('../../assets/images/bed3.png'),
    require('../../assets/images/bed4.png'),
    require('../../assets/images/bed5.png'),
    require('../../assets/images/bed6.png'),
    require('../../assets/images/bed7.png'),
    require('../../assets/images/bed8.png'),
  ],
  [Subroom.vet]: [
    require('../../assets/images/vet1.png'),
    require('../../assets/images/vet2.png'),
    require('../../assets/images/vet3.png'),
    require('../../assets/images/vet4.png'),
  ],
}

type Props = NativeStackScreenProps<CatRoomStackParamList, 'Subroom'>;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export const CatSubroomScreen: React.FC<Props> = ({navigation, route}) => {
  const { phase } = useContext<PhaseContextType>(PhaseContext);
  const subroom = route.params.subroom;
  const subroomContent = phase ? content[phase][subroom] : { thought: '', messages: [] };
  const [messageIndex, setMessageIndex] = useState<number>(-1);

  const images = subroomImages[subroom];

  // const [showImage, setImage] = useState(true);

  // useEffect(() => {
  //   // Change the state every second or the time given by User.
  //   const interval = setInterval(() => {
  //     setImage((showImage) => !showImage);
  //   }, 900);
  //   return () => clearInterval(interval);
  // }, []);

  // isVisible is set to false and you can use setIsVisible to change the value of isVisible
  const showMessage = (index: number) => {
    setMessageIndex(index);
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CustomHeader title={SubroomNames[subroom]} />, // use the custom header
    });
  }, [subroom]);

  const pages = [
    {
      subroom: Subroom.food,
      subroomContent: phase ? content[phase][Subroom.food] : { thought: '', messages: [] },
      images: subroomImages[Subroom.food],
    },

    {
      subroom: Subroom.litter,
      subroomContent: phase ? content[phase][Subroom.litter] : { thought: '', messages: [] },
      images: subroomImages[Subroom.litter],
    },

    {
      subroom: Subroom.bedding,
      subroomContent: phase ? content[phase][Subroom.bedding] : { thought: '', messages: [] },
      images: subroomImages[Subroom.bedding],
    },

    {
      subroom: Subroom.toys,
      subroomContent: phase ? content[phase][Subroom.toys] : { thought: '', messages: [] },
      images: subroomImages[Subroom.toys],
    },

    {
      subroom: Subroom.vet,
      subroomContent: phase ? content[phase][Subroom.vet] : { thought: '', messages: [] },
      images: subroomImages[Subroom.vet],
    },

    {
      subroom: Subroom.scratchingItems,
      subroomContent: phase ? content[phase][Subroom.scratchingItems] : { thought: '', messages: [] },
      images: subroomImages[Subroom.scratchingItems],
    }
  ];

  var offset = 0;
  if(subroom == Subroom.litter){
    offset = 1;
  }
  else if(subroom == Subroom.bedding){
    offset = 2;
  }
  else if(subroom == Subroom.toys){
    offset = 3;
  }
  else if(subroom == Subroom.vet){
    offset = 4;
  }
  else if(subroom == Subroom.scratchingItems){
    offset = 5;
  }
  else{
    offset = 0;
  }

  const [pageNum, setPageNum] = useState<number>(offset);


  const onMomentumScrollEnd = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const pageNum = event.nativeEvent.contentOffset.x / screenWidth;
    setPageNum(pageNum);
    if (pageNum >= 0 && pageNum < pages.length) {
      navigation.setOptions({
        headerTitle: () => <CustomHeader title={SubroomNames[pages[pageNum].subroom]} />,
      });
    }
  }, [navigation]);

  return (
    <View style = {{flex: 1}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator = {false}
        contentOffset={{x: screenWidth * offset, y: 0}}
        style = {styles.scrollView}
        onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {pages.map((page, index) => (
          <LinearGradient key = {index} colors={['rgb(217, 147, 210)', 'white']} style = {styles.screen}>
            {messageIndex == -1 &&
            (<MessageView message={`${page.subroomContent?.thought}`}/>)}

            {(messageIndex == 0 || messageIndex == 1 || messageIndex == 2 || messageIndex == 3) &&
            (<MessageView key={messageIndex} message={`${page.subroomContent?.messages[messageIndex]}`}/>)}

            <View style = {{flex: 1, justifyContent: 'center'}}>
              <View style = {{gap: 80,}}>
                <View style = {{alignItems: 'center'}}>
                  <TouchableOpacity onPress = {() => showMessage(0)}>
                    <Image source = {(page.images[0])}style = {styles.placeholder}></Image>
                  </TouchableOpacity>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity onPress = {() => showMessage(1)}>
                    <Image source = {(page.images[1])}style = {styles.placeholder}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => showMessage(2)}>
                    <Image source = {(page.images[2])}style = {styles.placeholder}></Image>
                  </TouchableOpacity>
                </View>
                <View style = {{alignItems: 'center'}}>
                  <TouchableOpacity onPress = {() => showMessage(3)}>
                    <Image source = {(page.images[3])}style = {styles.placeholder}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>


            {/* {subroomContent?.messages.map((message, index) => <Text key={index}>Message: {message}</Text>)} */}

            <TouchableOpacity style = {styles.button} onPress = {() => showMessage(-1)}>
              <Image source = {require('../../assets/images/cat.webp')} style = {styles.cat}></Image>
            </TouchableOpacity>

          </LinearGradient>
        ))}

      </ScrollView>
      <View style = {styles.pageBarContainer}>
        <PaginationDot
              activeDotColor={'black'}
              curPage={pageNum}
              maxPage={6}
          />
      </View>
    </View>


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
    width: screenWidth,
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

  scrollView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
  },

  pageBarContainer: {
    position: 'absolute',
    bottom: screenHeight/8,
    flex: 1,
    alignItems: 'center',
    width: '100%',

  }
})