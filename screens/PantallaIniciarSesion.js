import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import TextInputForm from "../components/TextInputForm";
import PasswordForm from "../components/PasswordForm";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import auth from '@react-native-firebase/auth';
import { useState } from "react";

const PantallaIniciarSesion = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      // El campo de correo electrónico o contraseña está vacío
      alert('Por favor, ingresa tu correo electrónico y contraseña');
      return;
    }
    auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log('Inicio de sesión exitoso');
        navigation.navigate("PantallaInicio1")
        // Realiza las acciones necesarias después del inicio de sesión exitoso
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          alert('El correo electrónico no es válido');
          break;
        case 'auth/user-disabled':
          alert('La cuenta de usuario está desactivada');
          break;
        case 'auth/user-not-found':
          alert('No se encontró ninguna cuenta con ese correo electrónico');
          break;
        case 'auth/wrong-password':
          alert('La contraseña es incorrecta');
          break;
        case 'auth/network-request-failed':
          alert('Error de red, verifica tu conexión a internet');
          break;
        default:
          alert('Ocurrió un error desconocido');
        }
      });
    
  };
  return (
    <View style={styles.pantallaIniciarSesion}>
      <View style={styles.register2}>
        <TextInputForm value={email} onChangeText={setEmail}/>
        <PasswordForm value={password} onChangeText={setPassword}/>
      </View>
      <View style={styles.lineDottedParent}>
        <Image
          style={[styles.lineDottedIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-dotted1.png")}
        />
        <Pressable style={[styles.outlined, styles.outlinedLayout]} onPress={() => navigation.navigate("PantallaOlvidarContrasea")}>
          <View style={[styles.colorsStrokeprimary, styles.outlinedLayout]} />
          <View style={[styles.spCapsXsMedium, styles.minicapsFlexBox]}>
            <Text style={[styles.minicaps, styles.body2Typo]}>
              Olvidé la contraseña
            </Text>
          </View>
        </Pressable>
        <Image
          style={[styles.lineDottedIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-dotted.png")}
        />
      </View>
      <Pressable
        style={[styles.accent, styles.accentPosition]}
        onPress={() => navigation.navigate("PantallaRegistrarse")}
      >
        <LinearGradient
          style={styles.accentShadowBox}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.minicapsFlexBox]}>
          <View style={[styles.spBody2Medium, styles.body2FlexBox]}>
            <Text style={[styles.body2, styles.body2FlexBox]}>Registrarse</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.accent2, styles.accentPosition]}
        onPress={handleLogin}
      >
        <LinearGradient
          style={styles.accentShadowBox}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.minicapsFlexBox]}>
          <View style={[styles.spBody2Medium, styles.body2FlexBox]}>
            <Text style={[styles.body2, styles.body2FlexBox]}>
              iniciar sesión
            </Text>
          </View>
        </View>
      </Pressable>
      <ImageBackground
        style={styles.lgo21Icon}
        resizeMode="cover"
        source={require("../assets/lgo21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    opacity: 0.24,
    height: 1,
  },
  outlinedLayout: {
    width: 109,
    height: 16,
  },
  minicapsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  body2Typo: {
    display: "flex",
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  accentPosition: {
    height: 40,
    top: 342,
    position: "absolute",
  },
  body2FlexBox: {
    width: 119,
    justifyContent: "center",
    alignItems: "center",
  },
  register2: {
    top: 192,
    right: 16,
    left: 16,
    height: 119,
    paddingBottom: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  lineDottedIcon: {
    width: 49,
  },
  colorsStrokeprimary: {
    borderRadius: Border.br_80xl,
    borderStyle: "solid",
    borderColor: "#304ffe",
    borderWidth: 1,
    opacity: 0.48,
  },
  minicaps: {
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 93,
    height: 16,
    top:3,
  },
  spCapsXsMedium: {
    marginTop: -16,
    width: 93,
    justifyContent: "center",
  },
  outlined: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  lineDottedIcon1: {
    width: 50,
  },
  lineDottedParent: {
    top: 311,
    right: 76,
    left: 76,
    flexDirection: "row",
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  accentShadowBox: {
    backgroundColor: Color.accentColor,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(27, 225, 175, 0.16)",
    borderRadius: Border.br_7xs,
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  body2: {
    fontSize: FontSize.spBUTTON_size,
    display: "flex",
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.spBUTTON,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  spBody2Medium: {
    height: 24,
  },
  flatdefault: {
    marginTop: -12,
    top: "50%",
    right: 8,
    left: 8,
    position: "absolute",
  },
  accent: {
    right: 21,
    left: 204,
  },
  accent2: {
    right: 206,
    left: 19,
  },
  lgo21Icon: {
    top: 45,
    width: 356,
    height: 101,
    left: 0,
    position: "absolute",
  },
  pantallaIniciarSesion: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaIniciarSesion;
