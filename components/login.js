import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import CustomButton from "./element/CustomButtonLogin";
import CustomInput from "./element/CustomInput";

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
      <Text style={styles.desc}>masuk untuk melanjutkan</Text>
      <View style={{ alignItems: "center" }}>
        <CustomInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <CustomInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text style={styles.forgot}>Lupa Password?</Text>
      </View>
      <View style={{ width: 300, marginLeft: 40 }}>
        <CustomButton title="Masuk" onPress={""} />
        <Text style={styles.text}>atau dengan</Text>
        <CustomButton title="Google" color={""} />
        <Text style={styles.text}>Belum punya akun? Daftar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 40,
  },
  login: {
    fontSize: 30,
    fontWeight: "800",
    width: 72,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 5,
  },
  desc: {
    color: "lightgrey",
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 40,
    marginBottom: 50,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "lightgrey",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
  forgot: {
    color: "lightgrey",
    width: 100,
    marginTop: 10,
    marginBottom: 60,
    marginLeft: 230,
  },
  text: {
    marginBottom: 15,
    marginTop: 15,
    textAlign: "center",
    color: "lightgrey",
  },
});
