import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    light: require('./assets/fonts/Poppins-Light.ttf'),
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    Bold: require('./assets/fonts/Poppins-Bold.ttf'),
    extraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: 20,
  },
});
