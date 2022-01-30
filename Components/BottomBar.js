import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function BodyComp() {
    return (
        <View style={styles.bottomBar}>
        <View style={styles.bottomButton}>
          <Image style={styles.bottomImg} source={require("../assets/Icons/discover_light.png")}/>
          <Text style={styles.bottomText}>Discover</Text>
        </View>
        <View style={styles.bottomButton}>
          <Image style={styles.bottomImg} source={require("../assets/Icons/heart_light.png")}/>
          <Text style={styles.bottomText}>Matches</Text>
        </View>
        <View style={styles.bottomButton}>
          <Image style={styles.bottomImg} source={require("../assets/Icons/messages_light.png")}/>
          <Text style={styles.bottomText}>DMs</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  bottomBar: {
    height: Platform.OS === 'ios' ? 41 : 54,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: Themes.light.navigation,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomButton: {
    alignItems: 'center',
    flex: 1
  },
  bottomImg: {
    height: Platform.OS === 'ios' ? 30 : 43,
    width: Platform.OS === 'ios' ? 30 : 43,
    margin: 5
  },
  bottomText: {
    color: Themes.light.textSecondary,
    fontSize: 15,
    fontFamily: 'Sydney',
  }
})