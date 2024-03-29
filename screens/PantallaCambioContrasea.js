import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth, { firebase } from '@react-native-firebase/auth';
import { isEqual } from "lodash";
const PantallaCambioContrasea = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmarPass, setConfirmarPass] = useState('');
  const [nuevaPassword, setNuevaPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [secureText2, setSecureText2] = useState(true);
  const [secureText3, setSecureText3] = useState(true);
  const toggleSecureText = () => {
    setSecureText(!secureText);
  };
  const toggleSecureText2 = () => {
    setSecureText2(!secureText2);
  };
  const toggleSecureText3 = () => {
    setSecureText3(!secureText3);
  };
  const handleCambioPassword = (text) =>{
    setPassword(text);
  }
  const handleCambioConfirmarPassword = (text) =>{
    setConfirmarPass(text);
  }
  const handleCambioNuevaPassword = (text) =>{
    setNuevaPassword(text);
  }
  const isValidPassword = (password) => {
    // Comprobar si la contraseña tiene más de 8 caracteres
    if (password.length <= 8) return false;
  
    // Comprobar si la contraseña tiene al menos un número
    const hasNumber = /\d/.test(password);
    if (!hasNumber) return false;
  
    // Comprobar si la contraseña tiene al menos una mayúscula
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase) return false;
  
    return true;
  };
  const handleCambiarContrasenia = async() =>{
    try {
      const email = user.email;
      const credential = auth.EmailAuthProvider.credential(email, password);
      if(!isValidPassword(nuevaPassword)){
        alert('La contraseña debe tener más de 8 caracteres, al menos un número y una mayúscula.');
        return;
      }
      if(isEqual(nuevaPassword,confirmarPass)){
        await user.reauthenticateWithCredential(credential);
       
        await user.updatePassword(nuevaPassword);
        console.log('Contraseña cambiada exitosamente');
        navigation.navigate("PantallaPerfilDeUsuario")
      }else {
        alert('Las contraseñas no coinciden.');
      }
      
    } catch (error) {
      alert('Error al cambiar la contraseña:', error.message);
    }
  };
  return (
    <View style={styles.pantallaCambioContrasea}>
      <Image
        style={styles.pantallaCambioContraseaChild}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      <View style={styles.defaultParent}>
        <View style={[styles.default, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular, styles.body2FlexBox]}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            value={nuevaPassword}
            onChangeText={handleCambioNuevaPassword}
            secureTextEntry={secureText}
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={styles.caption1}>Default name</Text>
          </View>
          <TouchableOpacity onPress={toggleSecureText}>
            <Image
              style={[styles.lockIcon, styles.strokePosition]}
              contentFit="cover"
              source={require("../assets/lock.png")}
            />
          </TouchableOpacity>
          <View style={styles.captionPosition}>
            <Text style={styles.caption1}>Nueva contraseña</Text>
          </View>
        </View>
        <View style={[styles.default1, styles.body2Position]}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular, styles.body2FlexBox]}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            value={password}
            onChangeText={handleCambioPassword}
            secureTextEntry={secureText2}
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={styles.caption1}>Default name</Text>
          </View>
          <TouchableOpacity onPress={toggleSecureText2}>
            <Image
              style={[styles.lockIcon, styles.strokePosition]}
              contentFit="cover"
              source={require("../assets/lock.png")}
            />
          </TouchableOpacity>
          <View style={styles.captionPosition}>
            <Text style={styles.caption1}>Confirmar antigua contraseña</Text>
          </View>
        </View>
        <View style={[styles.default2, styles.defaultPosition]}>
          <View style={[styles.stroke, styles.strokePosition]} />
          <TextInput
            style={[styles.spSubheadingRegular, styles.body2FlexBox]}
            placeholder="Confirm password"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.87)"
            value={confirmarPass}
            onChangeText={handleCambioConfirmarPassword}
            secureTextEntry={secureText3}
          />
          <View style={[styles.caption, styles.captionPosition]}>
            <Text style={styles.caption1}>Default name</Text>
          </View>
          <TouchableOpacity onPress={toggleSecureText3}>
            <Image
              style={[styles.lockIcon, styles.strokePosition]}
              contentFit="cover"
              source={require("../assets/lockopen.png")}
            />
          </TouchableOpacity>
          <View style={styles.captionPosition}>
            <Text style={styles.caption1}>Confirmar nueva contraseña</Text>
          </View>
        </View>
      </View>
      <Pressable style={[styles.dark, styles.darkPosition1]} onPress={() => navigation.navigate("PantallaPerfilDeUsuario")}>
        <Image
          style={[styles.darkIcon, styles.darkPosition]}
          contentFit="cover"
          source={require("../assets/-dark2.png")}
        />
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition1]} onPress={handleCambiarContrasenia}>
        <LinearGradient
          style={[styles.dark2, styles.darkPosition]}
          locations={[0, 1]}
          colors={["#1a73e9", "#6c92f4"]}
        />
        <View style={[styles.flatdefault, styles.body2Layout]}>
          <View style={[styles.spBody2Medium, styles.body2Layout]}>
            <Text style={[styles.body2, styles.body2Layout]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultPosition: {
    height: 56,
    right: 0,
    position: "absolute",
  },
  strokePosition: {
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  body2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  captionPosition: {
    bottom: 32,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2Position: {
    top: 0,
    left: 0,
  },
  darkPosition1: {
    height: 40,
    top: 294,
    position: "absolute",
  },
  darkPosition: {
    borderRadius: Border.br_7xs,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    position: "absolute",
  },
  pantallaCambioContraseaChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  stroke: {
    top: 55,
    backgroundColor: Color.textColor,
    bottom: 0,
    opacity: 0.4,
    left: 0,
  },
  spSubheadingRegular: {
    bottom: 6,
    opacity: 0.54,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    left: 0,
    right: 0,
    position: "absolute",
  },
  caption1: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    color: Color.textColor,
    textAlign: "left",
    height: 16,
    fontFamily: FontFamily.spCaptionRegular,
    width: 328,
  },
  caption: {
    display: "none",
  },
  lockIcon: {
    top: 22,
    bottom: 1,
    height: 32,
    width: 32,
  },
  default: {
    top: 56,
    left: 0,
  },
  default1: {
    height: 56,
    right: 0,
    position: "absolute",
  },
  default2: {
    top: 112,
    left: 0,
  },
  defaultParent: {
    top: 80,
    height: 168,
    width: 328,
    left: 19,
    position: "absolute",
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  dark: {
    right: 105,
    width: 72,
  },
  dark2: {
    shadowColor: "rgba(38, 50, 56, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.accentColor,
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
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
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
  },
  pantallaCambioContrasea: {
    backgroundColor: Color.lightColor,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PantallaCambioContrasea;
