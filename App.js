const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PantallaInicioEntrenamiento from "./screens/PantallaInicioEntrenamiento";
import PantallaMenu from "./screens/PantallaMenu";
import PantallaIniciarSesion from "./screens/PantallaIniciarSesion";
import PantallaMedidasCorporales2 from "./screens/PantallaMedidasCorporales2";
import PantallaMedidasCorporales from "./screens/PantallaMedidasCorporales";
import PantallaEstadisticas from "./screens/PantallaEstadisticas";
import PantallaNotificaciones from "./screens/PantallaNotificaciones";
import PantallaPersonalizacion from "./screens/PantallaPersonalizacion";
import PantallaCambiarFotoPerfil from "./screens/PantallaCambiarFotoPerfil";
import PantallaCambioCorreoElectro from "./screens/PantallaCambioCorreoElectro";
import PantallaCambioNombreUsuairo from "./screens/PantallaCambioNombreUsuairo";
import PantallaCambioContrasea from "./screens/PantallaCambioContrasea";
import PantallaPerfilDeUsuario from "./screens/PantallaPerfilDeUsuario";
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
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PantallaInicioEntrenamiento"
              component={PantallaInicioEntrenamiento}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaMenu"
              component={PantallaMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaIniciarSesion"
              component={PantallaIniciarSesion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaMedidasCorporales2"
              component={PantallaMedidasCorporales2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaMedidasCorporales"
              component={PantallaMedidasCorporales}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaEstadisticas"
              component={PantallaEstadisticas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaNotificaciones"
              component={PantallaNotificaciones}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaPersonalizacion"
              component={PantallaPersonalizacion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCambiarFotoPerfil"
              component={PantallaCambiarFotoPerfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCambioCorreoElectronico"
              component={PantallaCambioCorreoElectro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCambioNombreUsuairo"
              component={PantallaCambioNombreUsuairo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCambioContrasea"
              component={PantallaCambioContrasea}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaPerfilDeUsuario"
              component={PantallaPerfilDeUsuario}
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
