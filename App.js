import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import NavComp from './Components/Navigation'
import BodyComp from './Components/Body'
import BottomBarComp from './Components/BottomBar'

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={styles.background}>
      <View style={styles.topBar}></View>
      <NavComp></NavComp>
      <BodyComp></BodyComp>
      <BottomBarComp></BottomBarComp>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Themes.light.bg,
  },
  topBar: {
    height: Platform.OS === 'ios' ? 31 : 44,
    backgroundColor: 'grey'
  }
});
