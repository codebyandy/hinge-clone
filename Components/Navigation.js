import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function NavComp() {
    return (
        <View style={styles.nav}>
            <Image style={styles.navImg} source={require("../assets/Icons/menu_light.png")} />
            <Text style={styles.navText}>
            ensom
            </Text>
            <Image style={styles.navImg} source={require("../assets/Icons/sun.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 41 : 54,
        margin: 10
    },
    navText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sydney-Bold',
        flex: 1
    },
    navImg: {
        height: Platform.OS === 'ios' ? 30 : 43,
        width: Platform.OS === 'ios' ? 30 : 43,
        margin: 11
    },
})