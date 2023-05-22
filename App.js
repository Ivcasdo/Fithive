const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PantallaIniciarSesion from "./screens/PantallaIniciarSesion";
import PantallaMenu from "./screens/PantallaMenu";
import PantallaEditarIngredientes2 from "./screens/PantallaEditarIngredientes2";
import PantallaEditarIngredientes from "./screens/PantallaEditarIngredientes";
import PantallaEditarAlimentos from "./screens/PantallaEditarAlimentos";
import PantallaBibliotecaDeAliment from "./screens/PantallaBibliotecaDeAliment";
import PantallaAadirComida from "./screens/PantallaAadirComida";
import PantallaAjusteObjetivos from "./screens/PantallaAjusteObjetivos";
import PantallaInicioNutricion from "./screens/PantallaInicioNutricion";
import PantallaCreacionDeEntrenami from "./screens/PantallaCreacionDeEntrenami";
import PantallaCreacionDeEntrenami1 from "./screens/PantallaCreacionDeEntrenami1";
import PantallaCreacionDeEntrenami2 from "./screens/PantallaCreacionDeEntrenami2";
import PantallaCreacionDeEntrenami3 from "./screens/PantallaCreacionDeEntrenami3";
import PantallaCreacionDeEntrenami4 from "./screens/PantallaCreacionDeEntrenami4";
import PlantillaBibliotecaDeEjerci from "./screens/PlantillaBibliotecaDeEjerci";
import PlantillaBibliotecaDeEjerci1 from "./screens/PlantillaBibliotecaDeEjerci1";
import PlantillaBibliotecaDeEjerci2 from "./screens/PlantillaBibliotecaDeEjerci2";
import PantallaBibliotecaDeEntrena from "./screens/PantallaBibliotecaDeEntrena";
import PantallaBibliotecaDeEntrena1 from "./screens/PantallaBibliotecaDeEntrena1";
import PantallaCreacionDePlanes3 from "./screens/PantallaCreacionDePlanes3";
import PantallaCreacionDePlanes2 from "./screens/PantallaCreacionDePlanes2";
import PantallaCreacionDePlanes from "./screens/PantallaCreacionDePlanes";
import PantallaPlanesDeEntrenamien from "./screens/PantallaPlanesDeEntrenamien";
import PantallaRealizarEntrenamient from "./screens/PantallaRealizarEntrenamient";
import PantallaInicioEntrenamiento from "./screens/PantallaInicioEntrenamiento";
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
              name="PantallaEditarIngredientes2"
              component={PantallaEditarIngredientes2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaEditarIngredientes"
              component={PantallaEditarIngredientes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaEditarAlimentos"
              component={PantallaEditarAlimentos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaBibliotecaDeAlimentos"
              component={PantallaBibliotecaDeAliment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaAadirComida"
              component={PantallaAadirComida}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaAjusteObjetivos"
              component={PantallaAjusteObjetivos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaInicioNutricion"
              component={PantallaInicioNutricion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDeEntrenamientos5"
              component={PantallaCreacionDeEntrenami}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDeEntrenamientos4"
              component={PantallaCreacionDeEntrenami1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDeEntrenamientos3"
              component={PantallaCreacionDeEntrenami2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDeEntrenamientos2"
              component={PantallaCreacionDeEntrenami3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDeEntrenamientos"
              component={PantallaCreacionDeEntrenami4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlantillaBibliotecaDeEjercicios3"
              component={PlantillaBibliotecaDeEjerci}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlantillaBibliotecaDeEjercicios2"
              component={PlantillaBibliotecaDeEjerci1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlantillaBibliotecaDeEjercicios"
              component={PlantillaBibliotecaDeEjerci2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaBibliotecaDeEntrenamientos2"
              component={PantallaBibliotecaDeEntrena}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaBibliotecaDeEntrenamientos"
              component={PantallaBibliotecaDeEntrena1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDePlanes3"
              component={PantallaCreacionDePlanes3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDePlanes2"
              component={PantallaCreacionDePlanes2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaCreacionDePlanes"
              component={PantallaCreacionDePlanes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaPlanesDeEntrenamiento"
              component={PantallaPlanesDeEntrenamien}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaRealizarEntrenamiento"
              component={PantallaRealizarEntrenamient}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaInicioEntrenamiento"
              component={PantallaInicioEntrenamiento}
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
