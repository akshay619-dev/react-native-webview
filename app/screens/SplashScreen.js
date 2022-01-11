import React  from 'react';
import { Image, View,SafeAreaView ,StyleSheet} from "react-native";

const SplashScreen = (props) => {
    return (
        <SafeAreaView style={styles.SplashScreen_RootView}>
          <View style={styles.SplashScreen_ChildView}>  
            <Image source={{ uri : `${props.image_url}`}} 
             style={styles.SplashScreen_ImageView}
            />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: '#006241'
    },

    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#006241',  
        flex:1,  
    }, 
    SplashScreen_ImageView : {
      height: 100, 
      width: 100, 
      justifyContent: 'center', 
      alignItems: 'center',
      resizeMode : 'contain'
    } 
  });

export default SplashScreen;