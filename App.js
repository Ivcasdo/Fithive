const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PantallaIniciarSesion from "./screens/PantallaIniciarSesion";
import PantallaMenu from "./screens/PantallaMenu";
import PantallaInicio1 from "./screens/PantallaInicio1";
import PantallaRegistrarse from "./screens/PantallaRegistrarse";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="PantallaIniciarSesion"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="PantallaIniciarSesion"
              component={PantallaIniciarSesion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaInicio1"
              component={PantallaInicio1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaRegistrarse"
              component={PantallaRegistrarse}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
