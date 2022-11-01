import { React } from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Button, Text, View } from 'react-native';

const image = require('./images/splash-screen.jpg') ;

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.find}>Find your home away from home.</Text>

      <Text style={styles.explore}>Find your home away from home.</Text>


      <View style={styles.fixToText}>
        <Button
          style={styles.btn_left}
          title="Left button"
          color="#FF5A60"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          style={styles.btn_right}
          title="Right button"
          color="#ffffff"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E80"
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  find: {
    color: "white",
    fontSize: 28,
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 41,
    paddingLeft:37,
    paddingRight:91,
    fontWeight: "semibold"
  },
  explore: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 41,
    paddingTop:60,
    paddingLeft:37,
    paddingRight:91,
    fontWeight: "semibold"
  },
  fixToText: {
    flexDirection: 'row',
    paddingTop:60,
    paddingLeft:37,
    paddingRight:91,
    justifyContent: 'space-between',
  },
  btn_left:{
    width: 200,
    height: 100,
    background: "red"
  }
});

export default App;

