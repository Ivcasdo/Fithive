import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, TextInput, Text,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth, { firebase } from '@react-native-firebase/auth';
import { isEqual } from "lodash";
const PantallaCambioCorreoElectro = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };
  const handleCambioEmail = (text) =>{
    setEmail(text);
  }
  const handleCambioNewEmail = (text) =>{
    setNewEmail(text);
  }
  const handleCambioPassword = (text) =>{
    setPassword(text);
  }
  const handleGuardarEmail = async() =>{
    try {
      const emailuser = user.email;
      const credential = auth.EmailAuthProvider.credential(emailuser, password);
      if(isEqual(email,newEmail)){
        await user.reauthenticateWithCredential(credential);
        await user.updateEmail(newEmail);
        const nombreUsRef = firebase.app().database('https://tfgivan-b5e4b-default-rtdb.europe-west1.firebasedatabase.app').ref(`users/${user.uid}/correo`);
        nombreUsRef.set(newEmail);
      }else{
        alert('Los correos electronicos deben de coincidir')
      }
      console.log('Correo cambiada exitosamente');
      navigation.navigate("PantallaPerfilDeUsuario")
    } catch (error) {
      console.log(error.message);
      alert('Error al cambiar la contraseña:', error.message);
    }
  } 
  return (
    <View style={styles.pantallaCambioCorreoElectro}>
      <Image
        style={styles.pantallaCambioCorreoElectroChild}
        contentFit="cover"
        source={require("../assets/IconoApp.png")}
      />
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.stroke2Position]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular, styles.subheadingTypo]}
          placeholder="Email"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={newEmail}
          onChangeText={handleCambioNewEmail}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.captionLayout]}>
            Confirmar correo electronico
          </Text>
        </View>
        <Image
          style={[styles.emailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/email.png")}
        />
      </View>
      <View style={[styles.default1, styles.defaultPosition]}>
        <View style={[styles.stroke, styles.strokePosition]}>
          <View style={[styles.bgPrimary, styles.stroke2Position]} />
        </View>
        <TextInput
          style={[styles.spSubheadingRegular, styles.subheadingTypo]}
          placeholder="Email"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={email}
          onChangeText={handleCambioEmail}
        />
        <View style={styles.caption}>
          <Text style={[styles.caption1, styles.captionLayout]}>
            Correo electronico
          </Text>
        </View>
        <Image
          style={[styles.emailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/email.png")}
        />
      </View>
      <Pressable style={[styles.dark, styles.darkPosition]}  onPress={() => navigation.navigate("PantallaPerfilDeUsuario")}>
        <Image
          style={[styles.darkIcon, styles.strokePosition]}
          contentFit="cover"
          source={require("../assets/-dark2.png")}
        />
      </Pressable>
      <Pressable style={[styles.dark1, styles.darkPosition]} onPress={handleGuardarEmail}>
        <View style={styles.dark2}>
          <LinearGradient
            style={[styles.bgPrimary2, styles.strokePosition]}
            locations={[0, 1]}
            colors={["#1a73e9", "#6c92f4"]}
          />
        </View>
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={[styles.spBody2Medium, styles.flatdefaultPosition]}>
            <Text style={[styles.body2, styles.captionFlexBox]}>Guardar</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.default2, styles.defaultPosition]}>
        <View style={[styles.stroke2, styles.stroke2Position]} />
        <TextInput
          style={[styles.spSubheadingRegular2, styles.captionFlexBox]}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.87)"
          value={password}
          onChangeText={handleCambioPassword}
          secureTextEntry={secureText}
        />
        <View style={[styles.caption4, styles.captionFlexBox]}>
          <Text style={styles.captionLayout}>Default name</Text>
        </View>
        <TouchableOpacity onPress={toggleSecureText}>
          <Image
            style={[styles.lockIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
        </TouchableOpacity>
        <View style={[styles.caption6, styles.captionFlexBox]}>
          <Text style={styles.captionLayout}>Confirmar antigua contraseña</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultPosition: {
    height: 56,
    right: 13,
    left: 19,
    position: "absolute",
  },
  strokePosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  stroke2Position: {
    backgroundColor: Color.textColor,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  subheadingTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    opacity: 0.54,
    bottom: 6,
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
  iconLayout: {
    top:22,
    height: 32,
    right: 0,
    width: 32,
    position: "absolute",
  },
  darkPosition: {
    height: 40,
    top: 277,
    position: "absolute",
  },
  flatdefaultPosition: {
    top: "50%",
    marginTop: -12,
    height: 24,
    position: "absolute",
  },
  captionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  pantallaCambioCorreoElectroChild: {
    top: 18,
    left: 13,
    height: 31,
    width: 32,
    position: "absolute",
  },
  bgPrimary: {
    top: 0,
  },
  stroke: {
    height: 1,
    opacity: 0.4,
    left: 0,
  },
  spSubheadingRegular: {
    right: 44,
    height: 20,
    left: 0,
    position: "absolute",
  },
  caption1: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  caption: {
    height: 16,
    bottom: 32,
    left: 0,
    right: 0,
    position: "absolute",
  },
  emailIcon: {
    bottom: 2,
    overflow: "hidden",
  },
  default: {
    top: 136,
  },
  default1: {
    top: 76,
  },
  darkIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  dark: {
    right: 105,
    width: 72,
  },
  bgPrimary2: {
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
    top: 0,
    left: 0,
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
    top: 0,
  },
  spBody2Medium: {
    height: 24,
    left: 0,
    right: 0,
  },
  flatdefault: {
    right: 8,
    left: 8,
    height: 24,
  },
  dark1: {
    width: 128,
    left: 19,
    height: 40,
    top: 277,
  },
  stroke2: {
    top: 55,
    opacity: 0.4,
  },
  spSubheadingRegular2: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spCaptionRegular,
    opacity: 0.54,
    bottom: 6,
    right: 0,
  },
  caption4: {
    display: "none",
    bottom: 32,
    alignItems: "center",
    right: 0,
  },
  lockIcon: {
    bottom: 1,
    opacity: 0.4,
  },
  caption6: {
    bottom: 32,
    alignItems: "center",
    right: 0,
  },
  default2: {
    top: 200,
  },
  pantallaCambioCorreoElectro: {
    backgroundColor: Color.lightColor,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PantallaCambioCorreoElectro;
