import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/login";
import Portofolio from "./components/portofolio";
import Signup from "./components/signup";
// import SplashScreen from './SplashScreen';

// onPress={() => {setJumlah(jumlah+1)}}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} /> */}
        {/* <Stack.Screen
          name="Sign Up"
          component={Login}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="HomeScreen"
          component={Portofolio}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
