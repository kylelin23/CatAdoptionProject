import { StyleSheet } from 'react-native';

import { Image, View, Text } from 'react-native';

interface MainContentProps {
  phase: string;
}

const MainContent: React.FC<MainContentProps> = ({ phase }) => {

  return (
    <View style = {styles.screen}>
      <Image source={require('../../assets/images/maggy.png')} />
    </View>
  );
}

export default MainContent;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
