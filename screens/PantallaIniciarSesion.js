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
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PantallaIniciarSesion = () => {
  return (
    <View style={styles.pantallaIniciarSesion}>
      <View style={styles.register2}>
        <TextInputForm />
        <PasswordForm />
      </View>
      <View style={styles.lineDottedParent}>
        <Image
          style={[styles.lineDottedIcon, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-dotted.png")}
        />
        <Image
          style={[styles.lineDottedIcon1, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-dotted1.png")}
        />
        <Pressable style={styles.outlined}>
          <View style={styles.colorsStrokeprimary} />
          <View style={[styles.spCapsXsMedium, styles.mediumFlexBox]}>
            <Text style={styles.minicaps}>Olvidé la contraseña</Text>
          </View>
        </Pressable>
      </View>
      <Pressable style={[styles.accent, styles.accentPosition]}>
        <LinearGradient
          style={styles.accentShadowBox}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.mediumFlexBox]}>
          <View style={[styles.spBody2Medium, styles.body2Layout]}>
            <Text style={styles.bodyTypo}>Registrarse</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.accent2, styles.accentPosition]}>
        <LinearGradient
          style={styles.accentShadowBox}
          locations={[0, 1]}
          colors={["#1dde7d", "#72dfc5"]}
        />
        <View style={[styles.flatdefault, styles.mediumFlexBox]}>
          <View style={styles.body2Layout}>
            <Text style={[styles.body21, styles.bodyTypo]}>iniciar sesión</Text>
          </View>
        </View>
      </Pressable>
      <ImageBackground
        style={[styles.lgo21Icon, styles.body21Position]}
        resizeMode="cover"
        source={require("../assets/lgo21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    opacity: 0.24,
    height: 1,
    left: "50%",
    bottom: 8,
    position: "absolute",
  },
  mediumFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  accentPosition: {
    height: 40,
    top: 342,
    position: "absolute",
  },
  body2Layout: {
    height: 24,
    width: 119,
  },
  bodyTypo: {
    fontSize: FontSize.spBody2Medium_size,
    width: 119,
    display: "flex",
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
  },
  body21Position: {
    left: 0,
    position: "absolute",
  },
  register2: {
    top: 192,
    right: 16,
    left: 16,
    height: 119,
    paddingBottom: 24,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  lineDottedIcon: {
    marginLeft: 54,
    width: 50,
  },
  lineDottedIcon1: {
    marginLeft: -104,
    width: 49,
  },
  colorsStrokeprimary: {
    borderRadius: Border.br_80xl,
    borderStyle: "solid",
    borderColor: "#304ffe",
    borderWidth: 1,
    width: 109,
    opacity: 0.48,
    height: 16,
  },
  minicaps: {
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    display: "flex",
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textTransform: "uppercase",
    justifyContent: "center",
    width: 93,
    height: 16,
    alignItems: "center",
  },
  spCapsXsMedium: {
    marginTop: -16,
    width: 93,
    justifyContent: "center",
  },
  outlined: {
    right: 50,
    left: 49,
    justifyContent: "flex-end",
    top: 0,
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  lineDottedParent: {
    top: 311,
    right: 76,
    left: 76,
    height: 16,
    position: "absolute",
  },
  accentShadowBox: {
    backgroundColor: Color.primaryColor,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  spBody2Medium: {
    justifyContent: "center",
    alignItems: "center",
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
  body21: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  accent2: {
    right: 206,
    left: 19,
  },
  lgo21Icon: {
    top: 45,
    width: 356,
    height: 101,
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
