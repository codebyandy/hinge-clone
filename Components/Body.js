import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { palette } from '../assets/Themes/palette';

export default function BodyComp() {
    return (
        <View style={styles.body}>

            <View style={styles.profImgCont}>
                <ImageBackground style={styles.profImg} imageStyle={styles.profImg2} source={require("../assets/Profiles/mtl.jpg")}>
                    <Text style={styles.textOverlay}>MTL</Text>
                    <Text style={styles.textOverlay2}>2 miles away</Text>
                </ImageBackground>
            </View>

            <View style={styles.audioCard}>
                <Text style={styles.audioText}>My hottest take</Text>
                <View style={styles.audioImgCon}>
                <Image style={styles.audioImg1} source={require("../assets/Icons/player_light.png")}/>
                <Image style={styles.audioImg2} source={require("../assets/Icons/audio_waveform_light.png")}/>
                </View> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
      alignItems: 'center',
      margin: 10,
    },
    profImgCont: {
      width: '90%',
      height: undefined,
      aspectRatio: 1/1.1,
      elevation: 10
    },
    profImg: {

      height: undefined,
      aspectRatio: 1/1.1,
      shadowColor: '#000',
      shadowOpacity: 1,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 3 },
      borderRadius: 10,
      elevation: 5
    },
    profImg2: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 3 },
        borderRadius: 10,
        elevation: 5
    },
    textOverlay: {
        fontFamily: 'Sydney',
        fontSize: 32,
        color: Themes.light.textSecondary,
        padding: 10
    },
    textOverlay2: {
        fontFamily: 'Sydney',
        color: Themes.light.textSecondary,
        fontSize: 18,
        padding: 10,
        position: 'absolute',
        bottom: 0
    },
    audioCard: {
      margin: 20,
      backgroundColor: Themes.light.bgSecondary,
      width: '90%',
      borderRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 3 },
      borderRadius: 10,
      elevation: 5
    },
    audioText: {
      fontSize: 32,
      fontFamily: 'Sydney',
    },
    audioImgCon: {
      marginTop: 10,
      flexDirection: 'row',
      height: 40
    },
    audioImg1:  {
      flex: 1,
      height: null,
      resizeMode: 'contain'
    },
    audioImg2:  {
      flex: 5,
      padding: 10,
      width: null,
      height: null,
      resizeMode: 'contain'
    },
})