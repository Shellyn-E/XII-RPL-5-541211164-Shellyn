import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "shellyneuriska@gmail.com" && password === "12345") {
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <Text style={styles.login}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} color="#007BFF" />
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
  login: {
    fontSize: 24,
    width: 50,
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
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});
