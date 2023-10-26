import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <Text style={styles.signup}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Nama Lengkap" />
      <TextInput style={styles.input} placeholder="Username/Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <TextInput style={styles.input} placeholder="Ulang Password" />

      <Button title="Sign Up" color="#007BFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 70,
    height: 70,
  },
  signup: {
    fontSize: 24,
    width: 75,
    marginTop: 25,
    marginBottom: 25,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#007BFF",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
});
