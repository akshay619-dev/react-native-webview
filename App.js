import { StatusBar } from 'expo-status-bar';
import React ,{ useState, useEffect } from 'react';

import { StyleSheet,Platform, Text, View , ActivityIndicator, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

import SplashScreen from './app/screens/SplashScreen';

import {APP_URL ,SPLASH_SCREEN} from '@env'

 const IndicatorLoadingView = () => {
  return (
    <ActivityIndicator
      color="#FFFFFF"
      size="large"
      style={styles.IndicatorStyle}
    />
  );
}

export default function App() {

  const [ isVisible , setVisible] = useState(true);

  const hideSpashScreen = () => {
    setVisible(false);
  }

  useEffect(() => {
    
    setTimeout(() =>{  
      hideSpashScreen() 
    }, 5000);  

    console.log(isVisible);
  },[]);


  return (
    <SafeAreaView  style={styles.container}>
    <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#01B16A"/>  
    
    {
        (isVisible === true) ? <SplashScreen image_url = {SPLASH_SCREEN} /> : <WebView 
        style={styles.container}
        source={{ uri: APP_URL }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={IndicatorLoadingView}
        startInLoadingState={true}
      />
    }
    
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 10 : StatusBar.currentHeight,
  },
  IndicatorStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#006241'
  }
});
