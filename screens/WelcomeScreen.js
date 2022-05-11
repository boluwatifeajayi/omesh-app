import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";


import Button from "../components/Button";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
        <Text style={styles.headline}>CONOIL BY O'MESH</Text>
        <Text style={styles.tagline}>Register Your Credits Online</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login"  onPress={() => navigation.navigate("Login")}/>
        <Button title="Register" color="dark"  onPress={() => navigation.navigate("Register")}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: 150
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  headline: {
    fontSize: 40,
    fontWeight: "700",
   marginTop: 250,
   color: "orange"

  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: "white"
  },
});

export default WelcomeScreen;
