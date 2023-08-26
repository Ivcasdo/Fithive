import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth, { firebase } from '@react-native-firebase/auth';

const PantallaCambioNombreUsuairo = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };
  const handleCambioNombre = (text) =>{
    const filteredText = text.replace(/[.,]/g, '');
    setNombreUsuario(filteredText);
  }
  const handleCambioPassword = (text) =>{
    setPassword(text);
  }
  const handleGuardarNombre = async() =>{
    try {
      const email = user.email;
      const credential = auth.EmailAuthProvider.credential(email, password);
      if(nombreUsuario != ''){
        await user.reauthenticateWithCredential(credential);
        const nombreUsRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/nombre`);
        nombreUsRef.set(nombreUsuario);
      }else{
        alert('Rellene todos los campos');
      }
      navigation.navigate("PantallaPerfilDeUsuario")
    } catch (error) {
      alert('Error al cambiar el nombre de usuario:', error.message);
    }
  }
  return (
    <View style={styles.pantallaCambioNombreUsuairo}>
      <Image
        style={[
          styles.pantallaCambioNombreUsuairoChild,
          styles.permIdentityIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      <Pressable style={styles.dark} onPress={() => navigation.navigate("PantallaPerfilDeUsuario")}>
        <Image
          style={[styles.darkIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/-dark2.png")}
        />
      </Pressable>
      <Pressable style={styles.dark1} onPress={handleGuardarNombre}>
        <View style={styles.dark2}>
          <LinearGradient
            style={[styles.bgPrimary, styles.strokePosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.body2Layout]}>
          <View style={[styles.spBody2Medium, styles.body2Layout]}>
            <Text style={[styles.body2, styles.body2FlexBox]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary1, styles.stroke1Position]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular, styles.subheadingPosition]}
          placeholder="First name"
          keyboardType="default"
          maxLength={10}
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={nombreUsuario}
          onChangeText={handleCambioNombre}
        />
        <Image
          style={[styles.permIdentityIcon, styles.permIdentityIconLayout]}
          contentFit="cover"
          source={require("../assets/perm-identity.png")}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.captionLayout]}>
            Nuevo nombre de usuario
          </Text>
        </View>
      </View>
      <View style={[styles.default1, styles.defaultPosition]}>
        <View style={[styles.stroke1, styles.stroke1Position]} />
        <TextInput
          style={[styles.spSubheadingRegular1, styles.subheadingPosition]}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={password}
          onChangeText={handleCambioPassword}
          secureTextEntry={secureText}
        />
        <View style={[styles.caption2, styles.captionPosition]}>
          <Text style={styles.captionLayout}>Default name</Text>
        </View>
        <TouchableOpacity onPress={toggleSecureText}>
          <Image
            style={[styles.permIdentityIcon, styles.permIdentityIconLayout]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
        </TouchableOpacity>
        <View style={styles.captionPosition}>
          <Text style={styles.captionLayout}>Confirmar contraseña</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  permIdentityIconLayout: {
    width: 32,
    position: "absolute",
  },
  strokePosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    position: "absolute",
  },
  body2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  defaultPosition: {
    height: 56,
    right: 13,
    left: 19,
    position: "absolute",
  },
  stroke1Position: {
    backgroundColor: Color.textColor,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  subheadingPosition: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    opacity: 0.54,
    bottom: 6,
    left: 0,
    right: 0,
    position: "absolute",
  },
  captionLayout: {
    width: 328,
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
  },
  captionPosition: {
    bottom: 32,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  pantallaCambioNombreUsuairoChild: {
    top: 18,
    left: 13,
    height: 31,
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  dark: {
    right: 105,
    width: 72,
    height: 40,
    top: 203,
    position: "absolute",
  },
  bgPrimary: {
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.primaryColor,
    left: 0,
    top: 0,
  },
  dark2: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  body2: {
    fontSize: FontSize.spBUTTON_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.spBUTTON,
    color: Color.lightColor,
    textAlign: "center",
    display: "flex",
    width: 112,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  spBody2Medium: {
    top: "50%",
    marginTop: -12,
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    top: "50%",
    marginTop: -12,
    height: 24,
  },
  dark1: {
    width: 128,
    left: 19,
    height: 40,
    top: 203,
    position: "absolute",
  },
  bgPrimary1: {
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    left: 0,
  },
  spSubheadingRegular: {
    height: 20,
  },
  permIdentityIcon: {
    top:22,
    bottom: 1,
    height: 32,
    opacity: 0.4,
    right: 0,
  },
  caption1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  caption: {
    height: 16,
    bottom: 32,
    left: 0,
    right: 0,
    position: "absolute",
  },
  default: {
    top: 80,
  },
  stroke1: {
    top: 55,
    opacity: 0.4,
  },
  spSubheadingRegular1: {
    justifyContent: "center",
    alignItems: "center",
  },
  caption2: {
    display: "none",
  },
  default1: {
    top: 136,
  },
  pantallaCambioNombreUsuairo: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaCambioNombreUsuairo;
