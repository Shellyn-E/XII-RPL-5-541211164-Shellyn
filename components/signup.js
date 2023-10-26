import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (email === "shellyneuriska@gmail.com" && password === "12345") {
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <Text style={styles.signup}>Sign Up</Text>
      <Text style={styles.desc}>masuk untuk melanjutkan</Text>
      <View style={{ alignItems: "center" }}>
        <TextInput style={styles.input} placeholder="Nama Lengkap" />
        <TextInput style={styles.input} placeholder="Username / Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Ulang Password"
          secureTextEntry={true}
        />
        <Text style={styles.forgot}>Lupa Password?</Text>
      </View>
      <View style={{ width: 300, marginLeft: 40 }}>
        <Button title="Daftar" />
        <Text style={styles.text}>atau dengan</Text>
        <Button title="Google" color={""} />
        <Text style={styles.text}>Sudah punya akun? Masuk</Text>
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
  signup: {
    fontSize: 30,
    fontWeight: "800",
    width: 100,
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
