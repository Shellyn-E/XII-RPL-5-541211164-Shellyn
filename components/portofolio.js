import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function Portofolio() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>Shellyn Euriska Putri</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Text style={styles.recent}>My Recent Project</Text>

          <Image
            source={require("../assets/project-1.png")}
            style={styles.project}
          />
          <Text style={styles.projectTitle}>Project 1</Text>
          <Text style={styles.projectDesc}>Description Project 1</Text>

          <Image
            source={require("../assets/project-2.png")}
            style={styles.project}
          />
          <Text style={styles.projectTitle}>Project 2</Text>
          <Text style={styles.projectDesc}>Description Project 2</Text>

          <TextInput style={styles.input} placeholder="contact me" />

          <View style={styles.footer}>
            <Image
              source={require("../assets/github.png")}
              style={styles.socmed}
            ></Image>
            <Image
              source={require("../assets/linkedin.png")}
              style={styles.socmed}
            ></Image>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5d4a3e",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: 200,
    height: 200,
    marginTop: 72,
    borderRadius: 15,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    color: "#2c1b16",
  },
  description: {
    fontSize: 15,
    width: 275,
    textAlign: "center",
    marginTop: 10,
    color: "#2c1b16",
  },
  project: {
    height: 250,
    width: 300,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  projectTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#2c1b16",
    marginRight: 210,
  },
  projectDesc: {
    fontSize: 15,
    marginTop: 5,
    color: "#2c1b16",
    marginRight: 180,
    marginBottom: 20,
  },
  recent: {
    fontWeight: "bold",
    color: "#2c1b16",
    fontSize: 22,
    paddingTop: 10,
    marginTop: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#2c1b16",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    // backgroundColor: "#5d4a3e",
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  socmed: {
    width: 30,
    height: 30,
  },
});
