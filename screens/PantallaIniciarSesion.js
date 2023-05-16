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
        <Pressable style={[styles.outlined, styles.outlinedLayout]}>
          <View style={[styles.colorsStrokeprimary, styles.outlinedLayout]} />
          <View style={[styles.spCapsXsMedium, styles.flatdefaultFlexBox]}>
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
        <View style={[styles.flatdefault, styles.flatdefaultPosition]}>
          <View style={styles.spBody2Medium}>
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
        <View style={[styles.flatdefault1, styles.flatdefaultPosition]}>
          <View style={styles.spBody2Medium1}>
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
  outlinedLayout: {
    width: 109,
    height: 16,
  },
  flatdefaultFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  accentPosition: {
    height: 40,
    marginTop: -58,
    top: "50%",
    position: "absolute",
  },
  flatdefaultPosition: {
    left: 8,
    right: 8,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  bodyTypo: {
    fontSize: FontSize.spBUTTON_size,
    width: 119,
    display: "flex",
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.spBUTTON,
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
    marginTop: -208,
    right: 16,
    left: 16,
    height: 119,
    paddingBottom: 24,
    alignItems: "center",
    top: "50%",
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
    opacity: 0.48,
  },
  minicaps: {
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    display: "flex",
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.spBUTTON,
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
    marginLeft: -55,
    justifyContent: "flex-end",
    bottom: 0,
    width: 109,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  lineDottedParent: {
    top: 311,
    left: 76,
    width: 208,
    height: 16,
    position: "absolute",
  },
  accentShadowBox: {
    backgroundColor: "transparent",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(27, 225, 175, 0.16)",
    borderRadius: Border.br_7xs,
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  spBody2Medium: {
    height: 24,
    width: 119,
    justifyContent: "center",
    alignItems: "center",
  },
  flatdefault: {
    justifyContent: "center",
    alignItems: "center",
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
  spBody2Medium1: {
    height: 24,
    marginTop: -12,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  flatdefault1: {
    height: 24,
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
